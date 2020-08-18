const core = require('@actions/core');
const github = require('@actions/github');
const { parseTestReports, formatMilliseconds, partition, unique } = require('./utils.js');

const MAX_ANNOTATIONS_PER_REQUEST = 50;

const addAnnotations = async (check, title, partitions) => {
    const octokit = github.getOctokit(core.getInput('github_token'));
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

        await octokit.checks.update(updateCheckRequest);
        total += partitions[i].length;

        core.debug(`Update request for check ${check.id} is ${JSON.stringify(updateCheckRequest)}`);
    }

    core.info(`Added ${total} annotations to ${check.id}`);
}

const action = async () => {
    const reportPaths = core.getInput('report_paths');
    core.info(`Going to parse results form ${reportPaths}`);

    const check_name = core.getInput('check_name');
    const failIfEmpty = (core.getInput('fail_if_empty') || "false") === "true";
    const showSkipped = (core.getInput('show_skipped') || "false") === "true";

    const updateExistingCheck = (core.getInput('update_existing_check') || "false") === "true";
    const removeDuplicates = (core.getInput('remove_duplicates') || "true") === "true";

    core.info(`Running action with failIfEmpty: ${failIfEmpty}, showSkipped: ${showSkipped}, updateExistingCheck: ${updateExistingCheck}`)

    let { total, passed, failed, ignored, skipped, annotations, durationMs, files } = await parseTestReports(reportPaths, showSkipped);
    const foundResults = total > 0 || !failIfEmpty;

    core.debug(`Found ${total} test tests in testng-results.xml files: ${files.join(', ')}`)

    const octokit = github.getOctokit(core.getInput('github_token'));

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

    const pullRequest = github.context.payload.pull_request;
    const link = pullRequest && pullRequest.html_url || github.context.ref;
    const conclusion = (foundResults && annotations.length === 0) ? 'success' : 'failure';
    const status = 'completed';
    const head_sha = pullRequest && pullRequest.head.sha || github.context.sha;

    let checkToUpdate;

    if (removeDuplicates) {
        const count = annotations.length;
        annotations = unique(annotations, annotation => annotation.title);
        core.debug(`Removed ${annotations.length - count} duplicates.`)
    }

    let annotationsPartitioned = partition(annotations, MAX_ANNOTATIONS_PER_REQUEST);

    if (updateExistingCheck) {
        core.info(`Updating check '${check_name}' with status '${status}' and conclusion '${conclusion}' to ${link} (sha: ${head_sha})`);

        const listExistingChecks = {
            ...github.context.repo,
            ref: head_sha,
            check_name
        };

        const existingChecks = await octokit.checks.listForRef(listExistingChecks);

        if (!existingChecks.data) {
            core.setFailed(`Could not find existing check '${check_name}'`);
        } else if (existingChecks.data.check_runs.length > 1) {
            core.info(`Found multiple checks with name '${check_name}': ${JSON.stringify(existingChecks.data.check_runs)}`)
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

        await octokit.checks.update(updateCheckRequest);

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

        let response = await octokit.checks.create(createCheckRequest);

        checkToUpdate = response.data;
    }

    if (annotationsPartitioned.length > 1) {
        addAnnotations(checkToUpdate, annotationsPartitioned.slice(1));
    }
};

module.exports = action;
