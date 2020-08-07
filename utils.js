const glob = require('@actions/glob');
const core = require('@actions/core');
const fs = require('fs');
const parser = require('xml-js');

const resolveFileAndLine = (clazz, method, stacktrace) => {
    const regexp = new RegExp(`${clazz.replace(/\./g, "\\.")}\\.${method}\\((.*?):(\\d*?)\\)`, 'g');
    const matches = [...stacktrace.matchAll(regexp)];
    if (!matches.length) return { filename: clazz.replace(/\./g, "/"), line: 1 };

    const [lastMatch] = matches.slice(-1);
    const filename = clazz.replace(/\./g, "/");
    const line = parseInt(lastMatch[2]);
    return { filename, line };
};

const partition = (items, maxSize) => {
    let result = [[]];
    let buckets = Math.ceil(items.length / maxSize);

    items.forEach((value, index) => {
        let bucket = index % buckets;

        if (typeof result[bucket] === 'undefined') {
            result[bucket] = [];
        }

        result[bucket].push(value);
    });

    return result;
}

const unique = (items, hashFn) => {
    let hashes = new Map();
    let result = [];

    items.forEach((value) => {
        const hash = hashFn(value);

        if (!hashes.has(hash)) {
            result.push(value);
            hashes.set(hash, true);
        }
    });

    return result;
};

const resolvePath = async filename => {
    core.debug(`Resolving path for ${filename}`);
    const globber = await glob.create(`**/${filename}.*`, { followSymbolicLinks: false });
    const results = await globber.glob();
    core.debug(`Matched files: ${results}`);
    const searchPath = globber.getSearchPaths()[0];
    const path = results.length ? results[0].slice(searchPath.length + 1) : filename;
    core.debug(`Resolved path: ${path}`);

    return path;
};

const formatMilliseconds = milliseconds => {
    let hour, minute, seconds;

    if (milliseconds < 1000) {
        return `${milliseconds}ms`;
    }

    seconds = Math.floor(milliseconds / 1000);
    minute = Math.floor(seconds / 60);
    seconds = seconds % 60;
    hour = Math.floor(minute / 60);
    minute = minute % 60;

    return [
        {val: hour, unit: 'h'},
        {val: minute, unit: 'm'},
        {val: seconds, unit: 's'}
    ]
        .filter(value => value.val > 0)
        .map(value => `${value.val}${value.unit}`)
        .join(' ');
}

const toArray = value => {
    return Array.isArray(value) ? value : [value];
}

const extractValue = value => {
    return typeof value._cdata !== 'undefined' ? value._cdata : value;
}

const className = value => {
    return value.split(".").slice(-1)[0];
}

const getGroups = (groups, signature) => {
    let result = [];

    toArray(groups).forEach((element) => {
        if (element.signatures.indexOf(signature) >= 0) {
            result.push(element.name);
        }
    });

    return result.length > 0 ? `[groups: ${result.join(", ")}]` : '';
}

const getMethodParams = (method) => {
    let result = [];

    if (typeof method.params !== "undefined") {
        result = toArray(method.params.param)
            .map(param => `${param._attributes.index}: ${extractValue(param.value)}`);
    }

    return result.length > 0 ? `(${result.join(", ")})` : '';
}

async function parseFile(file) {
    core.debug(`Parsing file ${file}`);

    let annotations = [];

    const data = await fs.promises.readFile(file);

    const report = JSON.parse(parser.xml2json(data, { compact: true }));
    const results = report["testng-results"];

    const total = parseInt(results._attributes.total) || 0;
    const passed = parseInt(results._attributes.passed) || 0;
    const failed = parseInt(results._attributes.failed) || 0;
    const skipped = parseInt(results._attributes.skipped) || 0;
    const ignored = parseInt(results._attributes.ignored) || 0;

    const clazzes = toArray(results.suite)
        .map(suite => toArray(suite.test))
        .flat(1)
        .map(test => toArray(test.class))
        .flat(1);

    const groups = toArray(results.suite)
        .map(suite => toArray(suite.groups))
        .flat(1)
        .filter(group => Object.keys(group).length > 0)
        .map(group => toArray(group.group))
        .flat(1)
        .map(group => ({ name: group._attributes.name, signatures: toArray(group.method).map(method => `${method._attributes.class}.${method._attributes.name}`) } ));

    const durationMs = toArray(results.suite)
        .map(suite => parseInt(suite._attributes["duration-ms"]) || 0)
        .reduce((a, b) => a + b, 0);

    for (const clazz of clazzes) {
        const methods = toArray(clazz["test-method"]);

        core.debug(`Found ${methods.length} methods in test class ${clazz._attributes.name}`);

        for (const method of methods) {
            if (method._attributes.status == "FAIL") {
                const stackTrace = extractValue(method.exception["full-stacktrace"]).trim();
                const message = extractValue(method.exception.message).trim();

                const { filename, line } = resolveFileAndLine(
                    clazz._attributes.name,
                    method._attributes.name,
                    stackTrace
                );

                const path = await resolvePath(filename);
                const matchedGroups = getGroups(groups, `${clazz._attributes.name}.${method._attributes.name}`);
                const methodParams = getMethodParams(method);

                const title = `${className(clazz._attributes.name)} > ${method._attributes.name}${methodParams}${matchedGroups ? ' ' + matchedGroups : ''}`;

                core.info(`${path}:${line} | ${message.replace(/\n/g, ' ')}`);

                annotations.push({
                    path,
                    start_line: line,
                    end_line: line,
                    start_column: 0,
                    end_column: 0,
                    annotation_level: 'failure',
                    title,
                    message,
                    raw_details: stackTrace
                });
            }
        }
    }

    return { total, passed, failed, ignored, skipped, annotations, durationMs };
}

const parseTestReports = async (reportPaths, showSkipped) => {
    const globber = await glob.create(reportPaths, { followSymbolicLinks: false });
    let annotations = [];
    let passed = 0;
    let failed = 0;
    let ignored = 0;
    let skipped = 0;
    let durationMs = 0;

    for await (const file of globber.globGenerator()) {
        const { passed: p, failed: f, ignored: i, skipped: s, annotations: a, durationMs: d } = await parseFile(file);
        passed += p;
        failed += f;
        ignored += showSkipped ? i : 0;
        skipped += showSkipped ? s : 0;
        annotations = annotations.concat(a);
        durationMs += d;
    }

    const total = passed + failed + ignored + skipped;

    return { total, passed, failed, ignored, skipped, annotations, durationMs };
};

module.exports = { resolveFileAndLine, resolvePath, parseFile, parseTestReports, formatMilliseconds, partition, unique };
