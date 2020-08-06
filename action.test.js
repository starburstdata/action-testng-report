const core = require('@actions/core');
const github = require('@actions/github');
const nock = require('nock');
const action = require('./action');
const {
    finishedWithFailures,
    finishedSuccess,
    nothingFound,
    masterSuccess,
    nothingFoundSuccess,
    masterSuccessWithSkipped
} = require('./action.test.fixtures');

jest.setTimeout(20000);

let inputs = {};

describe('action should work', () => {
    beforeAll(() => {
        // https://github.com/actions/checkout/blob/v2.1.0/__test__/input-helper.test.ts
        jest.spyOn(core, 'getInput').mockImplementation(name => {
            return inputs[name];
        });

        jest.spyOn(core, 'error').mockImplementation(jest.fn());
        jest.spyOn(core, 'warning').mockImplementation(jest.fn());
        jest.spyOn(core, 'info').mockImplementation(jest.fn());
        jest.spyOn(core, 'debug').mockImplementation(jest.fn());

        github.context.payload.pull_request = {
            html_url: 'https://github.com/wendigo/action-testng-report',
            head: { sha: 'sha123' }
        };

        jest.spyOn(github.context, 'repo', 'get').mockImplementation(() => {
            return {
                owner: 'wendigo',
                repo: 'action-testng-report'
            };
        });
    });

    beforeEach(() => {
        // Reset inputs
        inputs = {
            report_paths: '**/surefire-reports/testng-results.xml',
            github_token: 'GITHUB_TOKEN',
            check_name: 'Test Report',
            fail_if_empty: "true",
            show_skipped: "false",
            update_existing_check: "false"
        };
    });

    afterAll(() => {
        jest.restoreAllMocks();
    });

    it('should parse testng reports and send a check run to GitHub', async () => {
        let request = null;
        const scope = nock('https://api.github.com')
            .post('/repos/wendigo/action-testng-report/check-runs', body => {
                request = body;
                return body;
            })
            .reply(200, {});
        await action();
        scope.done();

        expect(request).toMatchObject(finishedWithFailures);
    });

    it('should send all ok if no tests were broken', async () => {
        inputs.report_paths = '**/ok/target/surefire-reports/testng-results.xml';
        let request = null;
        const scope = nock('https://api.github.com')
            .post('/repos/wendigo/action-testng-report/check-runs', body => {
                request = body;
                return body;
            })
            .reply(200, {});
        await action();
        scope.done();

        expect(request).toMatchObject(finishedSuccess);
    });

    it('should send failure if no test results were found', async () => {
        inputs.report_paths = '**/xxx/*.xml';
        let request = null;
        const scope = nock('https://api.github.com')
            .post('/repos/wendigo/action-testng-report/check-runs', body => {
                request = body;
                return body;
            })
            .reply(200, {});
        await action();
        scope.done();

        expect(request).toMatchObject(nothingFound);
    });

    it('should send success if no test results were found and fail_if_empty is false', async () => {
        inputs.report_paths = '**/xxx/*.xml';
        inputs.fail_if_empty = "false";

        let request = null;
        const scope = nock('https://api.github.com')
            .post('/repos/wendigo/action-testng-report/check-runs', body => {
                request = body;
                return body;
            })
            .reply(200, {});
        await action();
        scope.done();

        expect(request).toMatchObject(nothingFoundSuccess);
    });

    it('should send reports to sha if no pr detected', async () => {
        inputs.report_paths = '**/ok/target/surefire-reports/testng-results.xml';
        github.context.payload.pull_request = undefined;
        github.context.sha = 'masterSha123';
        github.context.ref = 'refs/heads/master';

        let request = null;
        const scope = nock('https://api.github.com')
            .post('/repos/wendigo/action-testng-report/check-runs', body => {
                request = body;
                return body;
            })
            .reply(200, {});
        await action();
        scope.done();

        expect(request).toMatchObject(masterSuccess);
    });

    it('should send reports with skipped', async () => {
        inputs.report_paths = '**/ok/target/surefire-reports/testng-results.xml';
        inputs.show_skipped = "true";
        github.context.payload.pull_request = undefined;
        github.context.sha = 'masterSha123';
        github.context.ref = 'refs/heads/master';

        let request = null;
        const scope = nock('https://api.github.com')
            .post('/repos/wendigo/action-testng-report/check-runs', body => {
                request = body;
                return body;
            })
            .reply(200, {});
        await action();
        scope.done();

        expect(request).toMatchObject(masterSuccessWithSkipped);
    });
});
