const core = require('@actions/core');
const github = require('@actions/github');
const { retry } = require("@octokit/plugin-retry");
const { Octokit } = require("@octokit/core");
const RetryingOctokit = Octokit.plugin(retry);

const { parseTestReports, formatMilliseconds, partition, unique } = require('./utils.js');

const MAX_ANNOTATIONS_PER_REQUEST = 50;

const addAnnotations = async (check, title, partitions) => {
    const octokit = new RetryingOctokit({auth: core.getInput('github_token'), request: { retries: 3 }});
    let total = 0;

    for (let i = 0; i < partitions.length; i++) {
        const updateCheckRequest = {
            ...github.context.repo,
            check_run_id: check.id,
            output: {
                title: check.output.title || title,
                summary: check.output.summary || title,
                text: check.output.text || title,
                annotations: partitions[i],
            }
        };

        await octokit.rest.checks.update(updateCheckRequest);
        total += partitions[i].length;

        core.debug(`Update request for check ${check.id} is ${JSON.stringify(updateCheckRequest)}`);
    }

    core.info(`Added ${total} annotations to ${check.id}`);
}

const action = async () => {
    const reportPaths = core.getInput('report_paths');
    core.info(`Going to parse results form ${reportPaths}`);

    const check_name = core.getInput('check_name');
    const commit = core.getInput('commit');
    const failIfEmpty = (core.getInput('fail_if_empty') || "false") === "true";
    const showSkipped = (core.getInput('show_skipped') || "false") === "true";

    const updateExistingCheck = (core.getInput('update_existing_check') || "false") === "true";
    const removeDuplicates = (core.getInput('remove_duplicates') || "true") === "true";

    const skipPublishing = core.getInput('skip_publishing') === 'true';

    core.info(`Running action with failIfEmpty: ${failIfEmpty}, showSkipped: ${showSkipped}, updateExistingCheck: ${updateExistingCheck}`)

    let { total, passed, failed, ignored, skipped, annotations, durationMs, errors } = await parseTestReports(reportPaths, showSkipped);
    const foundResults = total > 0 || !failIfEmpty;

    if (errors.length > 0) {
        errors.forEach(error => core.debug(`Could not fully parse ${error.file}: ${error.error}`));
    }

    if (skipPublishing) {
        core.info('Not publishing test result due to skip_publishing=true');
        for (const annotation of annotations) {
            const properties = {
                title: annotation.title,
                file: annotation.path,
                startLine: annotation.start_line,
                endLine: annotation.end_line,
                startColumn: annotation.start_column,
                endColumn: annotation.end_column
            };
            core.error(annotation.message, properties);
        }
        return;
    }

    const octokit = github.getOctokit(core.getInput('github_token'), {request: fetch});

    let stats = [
        `${passed} passed`,
        `${failed} failed`
    ];

    if (showSkipped) {
        stats.push(`${ignored} ignored`);
        stats.push(`${skipped} skipped`);
    }

    const title = foundResults
        ? `${total} tests: ${stats.join(", ")}. Elapsed ${formatMilliseconds(durationMs)}.`
        : 'No TestNG reports found!';

    core.info(`Result: ${title}`);

    const pullRequest = github.context.payload.pull_request;
    const link = pullRequest && pullRequest.html_url || github.context.ref;
    const conclusion = (foundResults && annotations.length === 0) ? 'success' : 'failure';
    const status = 'completed';
    const head_sha = commit || pullRequest && pullRequest.head.sha || github.context.sha;

    let checkToUpdate;

    if (removeDuplicates) {
        const count = annotations.length;
        annotations = unique(annotations, annotation => annotation.title);
        core.info(`Removed ${annotations.length - count} duplicates.`)
    }

    let annotationsPartitioned = partition(annotations, MAX_ANNOTATIONS_PER_REQUEST);

    console.debug(`Partitioned ${annotations.length} annotations into ${annotationsPartitioned.length} partitions`);

    if (updateExistingCheck) {
        core.info(`Updating check '${check_name}' with status '${status}' and conclusion '${conclusion}' to ${link} (sha: ${head_sha})`);

        const listExistingChecks = {
            ...github.context.repo,
            ref: head_sha,
            check_name
        };

        const existingChecks = await octokit.rest.checks.listForRef(listExistingChecks);

        if (!(existingChecks.data && existingChecks.data.check_runs.length == 1)) {
            core.setFailed(`Could not find existing check '${check_name}'`);
        }

        const existingCheck = existingChecks.data.check_runs.slice(-1)[0];
        core.info(`Found existing check with id ${existingCheck.id}`)

        const output = {
            title: title,
            summary: existingCheck.output.summary || title,
            text: existingCheck.output.text || title,
            annotations: annotationsPartitioned[0]
        };

        const updateCheckRequest = {
            ...github.context.repo,
            check_run_id: existingCheck.id,
            output
        };

        core.debug(`Updating check ${existingCheck.id} with ${JSON.stringify(updateCheckRequest)}`);

        await octokit.rest.checks.update(updateCheckRequest);

        checkToUpdate = existingCheck;
    }
    else {
        core.info(`Creating check '${check_name}' with status '${status}' and conclusion '${conclusion}' to ${link} (sha: ${head_sha})`);

        const createCheckRequest = {
            ...github.context.repo,
            name: check_name,
            head_sha,
            status,
            conclusion,
            output: {
                title,
                summary: '',
                annotations: annotationsPartitioned[0]
            }
        };

        let response = await octokit.rest.checks.create(createCheckRequest);

        checkToUpdate = response.data;
    }

    if (annotationsPartitioned.length > 1) {
        addAnnotations(checkToUpdate, annotationsPartitioned.slice(1));
    }
};

module.exports = action;
