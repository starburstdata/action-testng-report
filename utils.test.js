const { resolveFileAndLine, resolvePath, parseFile } = require('./utils');

describe('resolveFileAndLine', () => {
    it('should default to 1 if no line found', () => {
        const { filename, line } = resolveFileAndLine('someClassName', 'someMethodName', 'not a stacktrace');
        expect(filename).toBe('someClassName');
        expect(line).toBe(1);
    });

    it('should parse correctly filename and line for a Java file', () => {
        const { filename, line } = resolveFileAndLine(
            'action.surefire.report.email.EmailAddressTest',
            'shouldNotContainInternationalizedHostNames',
            `
action.surefire.report.email.InvalidEmailAddressException: Invalid email address 'user@ñandú.com.ar'
    at action.surefire.report.email.EmailAddressTest.expectException(EmailAddressTest.java:74)
    at action.surefire.report.email.EmailAddressTest.shouldNotContainInternationalizedHostNames(EmailAddressTest.java:39)
        `
        );
        expect(filename).toBe('action/surefire/report/email/EmailAddressTest');
        expect(line).toBe(39);
    });

    it('should parse correctly filename and line for extended stacktrace', () => {
        const { filename, line } = resolveFileAndLine(
            'action.surefire.report.calc.StringUtilsTest',
            'require_fail',
            `
java.lang.AssertionError:

Expected: (an instance of java.lang.IllegalArgumentException and exception with message a string containing "This is unexpected")
     but: exception with message a string containing "This is unexpected" message was "Input='' didn't match condition."
Stacktrace was: java.lang.IllegalArgumentException: Input='' didn't match condition.
	at action.surefire.report.calc.StringUtils.requireNotBlank(StringUtils.java:25)
	at action.surefire.report.calc.StringUtils.requireNotBlank(StringUtils.java:18)
	at action.surefire.report.calc.StringUtilsTest.require_fail(StringUtilsTest.java:26)
	at sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)
	at org.junit.runners.ParentRunner.run(ParentRunner.java:413)
	at org.apache.maven.surefire.junit4.JUnit4Provider.invoke(JUnit4Provider.java:159)
	at org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:418)
`
        );
        expect(filename).toBe('action/surefire/report/calc/StringUtilsTest');
        expect(line).toBe(26);
    });
});

describe('resolvePath', () => {
    it('should find correct file for Java filename', async () => {
        const path = await resolvePath('EmailAddressTest');
        expect(path).toBe(
            'tests/email/src/test/java/action/testng/report/email/EmailAddressTest.java'
        );
    });

    it('should find correct file for Kotlin filename', async () => {
        const path = await resolvePath('CalcUtilsTest');
        expect(path).toBe('tests/utils/src/test/java/action/testng/report/calc/CalcUtilsTest.kt');
    });
});

describe('parseFile', () => {
    it('should parse CalcUtils results', async () => {
        const { total, passed, failed, ignored, skipped, annotations } = await parseFile(
            'tests/utils/target/surefire-reports/testng-results.xml'
        );

        expect(total).toBe(8);
        expect(skipped).toBe(0);
        expect(passed).toBe(3);
        expect(ignored).toBe(1);
        expect(failed).toBe(4);

        expect(annotations.filter(value => value.path.endsWith('CalcUtilsTest.kt'))).toMatchObject([
            {
                path: 'tests/utils/src/test/java/action/testng/report/calc/CalcUtilsTest.kt',
                start_line: 27,
                end_line: 27,
                start_column: 0,
                end_column: 0,
                annotation_level: 'failure',
                title: 'CalcUtilsTest > test error handling',
                message: 'Expected IllegalStateException to be thrown, but IllegalArgumentException was thrown',
                raw_details: expect.stringMatching(/Amount must have max 2 non-zero decimal places/)
            },
            {
                path: 'tests/utils/src/test/java/action/testng/report/calc/CalcUtilsTest.kt',
                start_line: 15,
                end_line: 15,
                start_column: 0,
                end_column: 0,
                annotation_level: 'failure',
                title: 'CalcUtilsTest > test scale',
                message: 'Expected <100.11>, actual <100.10>.',
                raw_details: expect.stringMatching(/at action.testng.report.calc.CalcUtilsTest.test scale\(CalcUtilsTest.kt:15\)/)
            }
        ]);
    });

    it('should parse Presto PostgreSQL static results', async () => {
        const { annotations } = await parseFile(
            'static-reports/postgresql/testng-results.xml'
        );

        expect(annotations.map(annotation => annotation.title)).toMatchObject([
            "TestPostgreSql > testCreateTableAsSelect(0: postgresql_basic) [groups: profile_specific_tests, kerberized_postgresql]",
            "TestPostgreSql > testCreateTableAsSelect(0: postgresql_kerberos, 1: postgresql_kerberos) [groups: profile_specific_tests, kerberized_postgresql]",
            "TestPostgreSql > testCreateTableAsSelect(0: postgresql_pass_through) [groups: profile_specific_tests, kerberized_postgresql]"
        ]);
    });
});
