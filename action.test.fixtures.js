const finishedWithFailures = {
    name: 'Test Report',
    head_sha: 'sha123',
    status: 'completed',
    conclusion: 'failure',
    output: {
        title: expect.stringMatching(/19 tests: 7 passed, 12 failed. Elapsed \d+ms.$/),
        summary: '',
        annotations: [
            {
                "path": "tests/email/src/test/java/action/testng/report/email/EmailAddressTest.java",
                "start_line": 48,
                "end_line": 48,
                "start_column": 0,
                "end_column": 0,
                "annotation_level": "failure",
                "title": "EmailAddressTest > shouldBeStricterThanRfc2821 [groups: rfc]",
                "message": "Invalid email address 'Abc\\@def@example.com'",
                "raw_details": "action.testng.report.email.InvalidEmailAddressException: Invalid email address 'Abc\\@def@example.com'\n\tat action.testng.report.email.EmailAddress.<init>(EmailAddress.java:31)\n\tat action.testng.report.email.EmailAddress.of(EmailAddress.java:23)\n\tat action.testng.report.email.EmailAddressTest.expectException(EmailAddressTest.java:86)\n\tat action.testng.report.email.EmailAddressTest.shouldBeStricterThanRfc2821(EmailAddressTest.java:48)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:104)\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:645)\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:851)\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1177)\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:129)\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:112)\n\tat org.testng.TestRunner.privateRun(TestRunner.java:756)\n\tat org.testng.TestRunner.run(TestRunner.java:610)\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:387)\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:382)\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:340)\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:289)\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:86)\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1293)\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1218)\n\tat org.testng.TestNG.runSuites(TestNG.java:1133)\n\tat org.testng.TestNG.run(TestNG.java:1104)\n\tat org.apache.maven.surefire.testng.TestNGExecutor.run(TestNGExecutor.java:135)\n\tat org.apache.maven.surefire.testng.TestNGDirectoryTestSuite.executeSingleClass(TestNGDirectoryTestSuite.java:112)\n\tat org.apache.maven.surefire.testng.TestNGDirectoryTestSuite.execute(TestNGDirectoryTestSuite.java:99)\n\tat org.apache.maven.surefire.testng.TestNGProvider.invoke(TestNGProvider.java:146)\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:384)\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:345)\n\tat org.apache.maven.surefire.booter.ForkedBooter.execute(ForkedBooter.java:126)\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:418)"
            },
            {
                "path": "tests/email/src/test/java/action/testng/report/email/EmailAddressTest.java",
                "start_line": 56,
                "end_line": 56,
                "start_column": 0,
                "end_column": 0,
                "annotation_level": "failure",
                "title": "EmailAddressTest > shouldBeStricterThanRfc2822",
                "message": "Address aba@bab.com should have thrown InvalidEmailAddressException",
                "raw_details": "java.lang.AssertionError: Address aba@bab.com should have thrown InvalidEmailAddressException\n\tat org.testng.Assert.fail(Assert.java:94)\n\tat action.testng.report.email.EmailAddressTest.expectException(EmailAddressTest.java:87)\n\tat action.testng.report.email.EmailAddressTest.shouldBeStricterThanRfc2822(EmailAddressTest.java:56)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:104)\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:645)\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:851)\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1177)\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:129)\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:112)\n\tat org.testng.TestRunner.privateRun(TestRunner.java:756)\n\tat org.testng.TestRunner.run(TestRunner.java:610)\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:387)\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:382)\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:340)\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:289)\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:86)\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1293)\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1218)\n\tat org.testng.TestNG.runSuites(TestNG.java:1133)\n\tat org.testng.TestNG.run(TestNG.java:1104)\n\tat org.apache.maven.surefire.testng.TestNGExecutor.run(TestNGExecutor.java:135)\n\tat org.apache.maven.surefire.testng.TestNGDirectoryTestSuite.executeSingleClass(TestNGDirectoryTestSuite.java:112)\n\tat org.apache.maven.surefire.testng.TestNGDirectoryTestSuite.execute(TestNGDirectoryTestSuite.java:99)\n\tat org.apache.maven.surefire.testng.TestNGProvider.invoke(TestNGProvider.java:146)\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:384)\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:345)\n\tat org.apache.maven.surefire.booter.ForkedBooter.execute(ForkedBooter.java:126)\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:418)"
            },
            {
                "path": "tests/email/src/test/java/action/testng/report/email/EmailAddressTest.java",
                "start_line": 74,
                "end_line": 74,
                "start_column": 0,
                "end_column": 0,
                "annotation_level": "failure",
                "title": "EmailAddressTest > shouldFailWithDataProvider(0: this will fail)",
                "message": "Expected this to fail",
                "raw_details": "java.lang.RuntimeException: Expected this to fail\n\tat action.testng.report.email.EmailAddressTest.shouldFailWithDataProvider(EmailAddressTest.java:74)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:104)\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:645)\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:851)\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1177)\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:129)\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:112)\n\tat org.testng.TestRunner.privateRun(TestRunner.java:756)\n\tat org.testng.TestRunner.run(TestRunner.java:610)\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:387)\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:382)\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:340)\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:289)\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:86)\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1293)\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1218)\n\tat org.testng.TestNG.runSuites(TestNG.java:1133)\n\tat org.testng.TestNG.run(TestNG.java:1104)\n\tat org.apache.maven.surefire.testng.TestNGExecutor.run(TestNGExecutor.java:135)\n\tat org.apache.maven.surefire.testng.TestNGDirectoryTestSuite.executeSingleClass(TestNGDirectoryTestSuite.java:112)\n\tat org.apache.maven.surefire.testng.TestNGDirectoryTestSuite.execute(TestNGDirectoryTestSuite.java:99)\n\tat org.apache.maven.surefire.testng.TestNGProvider.invoke(TestNGProvider.java:146)\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:384)\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:345)\n\tat org.apache.maven.surefire.booter.ForkedBooter.execute(ForkedBooter.java:126)\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:418)"
            },
            {
                "path": "tests/email/src/test/java/action/testng/report/email/EmailAddressTest.java",
                "start_line": 38,
                "end_line": 38,
                "start_column": 0,
                "end_column": 0,
                "annotation_level": "failure",
                "title": "EmailAddressTest > shouldNotContainInternationalizedHostNames",
                "message": "Invalid email address 'user@ñandú.com.ar'",
                "raw_details": "action.testng.report.email.InvalidEmailAddressException: Invalid email address 'user@ñandú.com.ar'\n\tat action.testng.report.email.EmailAddress.<init>(EmailAddress.java:31)\n\tat action.testng.report.email.EmailAddress.of(EmailAddress.java:23)\n\tat action.testng.report.email.EmailAddressTest.expectException(EmailAddressTest.java:86)\n\tat action.testng.report.email.EmailAddressTest.shouldNotContainInternationalizedHostNames(EmailAddressTest.java:38)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:104)\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:645)\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:851)\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1177)\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:129)\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:112)\n\tat org.testng.TestRunner.privateRun(TestRunner.java:756)\n\tat org.testng.TestRunner.run(TestRunner.java:610)\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:387)\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:382)\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:340)\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:289)\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:86)\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1293)\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1218)\n\tat org.testng.TestNG.runSuites(TestNG.java:1133)\n\tat org.testng.TestNG.run(TestNG.java:1104)\n\tat org.apache.maven.surefire.testng.TestNGExecutor.run(TestNGExecutor.java:135)\n\tat org.apache.maven.surefire.testng.TestNGDirectoryTestSuite.executeSingleClass(TestNGDirectoryTestSuite.java:112)\n\tat org.apache.maven.surefire.testng.TestNGDirectoryTestSuite.execute(TestNGDirectoryTestSuite.java:99)\n\tat org.apache.maven.surefire.testng.TestNGProvider.invoke(TestNGProvider.java:146)\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:384)\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:345)\n\tat org.apache.maven.surefire.booter.ForkedBooter.execute(ForkedBooter.java:126)\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:418)"
            },
            {
                "path": "tests/email/src/test/java/action/testng/report/email/EmailAddressTest.java",
                "start_line": 65,
                "end_line": 65,
                "start_column": 0,
                "end_column": 0,
                "annotation_level": "failure",
                "title": "EmailAddressTest > shouldNotAllowDotsInWeirdPlaces",
                "message": "Invalid email address '.user@host.com'",
                "raw_details": "action.testng.report.email.InvalidEmailAddressException: Invalid email address '.user@host.com'\n\tat action.testng.report.email.EmailAddress.<init>(EmailAddress.java:31)\n\tat action.testng.report.email.EmailAddress.of(EmailAddress.java:23)\n\tat action.testng.report.email.EmailAddressTest.expectException(EmailAddressTest.java:86)\n\tat action.testng.report.email.EmailAddressTest.shouldNotAllowDotsInWeirdPlaces(EmailAddressTest.java:65)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:104)\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:645)\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:851)\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1177)\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:129)\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:112)\n\tat org.testng.TestRunner.privateRun(TestRunner.java:756)\n\tat org.testng.TestRunner.run(TestRunner.java:610)\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:387)\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:382)\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:340)\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:289)\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:86)\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1293)\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1218)\n\tat org.testng.TestNG.runSuites(TestNG.java:1133)\n\tat org.testng.TestNG.run(TestNG.java:1104)\n\tat org.apache.maven.surefire.testng.TestNGExecutor.run(TestNGExecutor.java:135)\n\tat org.apache.maven.surefire.testng.TestNGDirectoryTestSuite.executeSingleClass(TestNGDirectoryTestSuite.java:112)\n\tat org.apache.maven.surefire.testng.TestNGDirectoryTestSuite.execute(TestNGDirectoryTestSuite.java:99)\n\tat org.apache.maven.surefire.testng.TestNGProvider.invoke(TestNGProvider.java:146)\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:384)\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:345)\n\tat org.apache.maven.surefire.booter.ForkedBooter.execute(ForkedBooter.java:126)\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:418)"
            },
            {
                "path": "tests/email/src/test/java/action/testng/report/email/EmailAddressTest.java",
                "start_line": 17,
                "end_line": 17,
                "start_column": 0,
                "end_column": 0,
                "annotation_level": "failure",
                "title": "EmailAddressTest > shouldNotBeBlank",
                "message": "Email address must not be null, empty, or blanks",
                "raw_details": "action.testng.report.email.InvalidEmailAddressException: Email address must not be null, empty, or blanks\n\tat action.testng.report.email.EmailAddress.<init>(EmailAddress.java:28)\n\tat action.testng.report.email.EmailAddress.of(EmailAddress.java:23)\n\tat action.testng.report.email.EmailAddressTest.expectException(EmailAddressTest.java:86)\n\tat action.testng.report.email.EmailAddressTest.shouldNotBeBlank(EmailAddressTest.java:17)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:104)\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:645)\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:851)\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1177)\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:129)\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:112)\n\tat org.testng.TestRunner.privateRun(TestRunner.java:756)\n\tat org.testng.TestRunner.run(TestRunner.java:610)\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:387)\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:382)\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:340)\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:289)\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:86)\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1293)\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1218)\n\tat org.testng.TestNG.runSuites(TestNG.java:1133)\n\tat org.testng.TestNG.run(TestNG.java:1104)\n\tat org.apache.maven.surefire.testng.TestNGExecutor.run(TestNGExecutor.java:135)\n\tat org.apache.maven.surefire.testng.TestNGDirectoryTestSuite.executeSingleClass(TestNGDirectoryTestSuite.java:112)\n\tat org.apache.maven.surefire.testng.TestNGDirectoryTestSuite.execute(TestNGDirectoryTestSuite.java:99)\n\tat org.apache.maven.surefire.testng.TestNGProvider.invoke(TestNGProvider.java:146)\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:384)\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:345)\n\tat org.apache.maven.surefire.booter.ForkedBooter.execute(ForkedBooter.java:126)\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:418)"
            },
            {
                "path": "tests/email/src/test/java/action/testng/report/email/EmailAddressTest.java",
                "start_line": 24,
                "end_line": 24,
                "start_column": 0,
                "end_column": 0,
                "annotation_level": "failure",
                "title": "EmailAddressTest > shouldNotMissComponents",
                "message": "Address user-without-host@test.com should have thrown InvalidEmailAddressException",
                "raw_details": "java.lang.AssertionError: Address user-without-host@test.com should have thrown InvalidEmailAddressException\n\tat org.testng.Assert.fail(Assert.java:94)\n\tat action.testng.report.email.EmailAddressTest.expectException(EmailAddressTest.java:87)\n\tat action.testng.report.email.EmailAddressTest.shouldNotMissComponents(EmailAddressTest.java:24)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:104)\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:645)\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:851)\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1177)\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:129)\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:112)\n\tat org.testng.TestRunner.privateRun(TestRunner.java:756)\n\tat org.testng.TestRunner.run(TestRunner.java:610)\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:387)\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:382)\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:340)\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:289)\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:86)\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1293)\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1218)\n\tat org.testng.TestNG.runSuites(TestNG.java:1133)\n\tat org.testng.TestNG.run(TestNG.java:1104)\n\tat org.apache.maven.surefire.testng.TestNGExecutor.run(TestNGExecutor.java:135)\n\tat org.apache.maven.surefire.testng.TestNGDirectoryTestSuite.executeSingleClass(TestNGDirectoryTestSuite.java:112)\n\tat org.apache.maven.surefire.testng.TestNGDirectoryTestSuite.execute(TestNGDirectoryTestSuite.java:99)\n\tat org.apache.maven.surefire.testng.TestNGProvider.invoke(TestNGProvider.java:146)\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:384)\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:345)\n\tat org.apache.maven.surefire.booter.ForkedBooter.execute(ForkedBooter.java:126)\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:418)"
            },
            {
                "path": "tests/email/src/test/java/action/testng/report/email/EmailAddressTest.java",
                "start_line": 31,
                "end_line": 31,
                "start_column": 0,
                "end_column": 0,
                "annotation_level": "failure",
                "title": "EmailAddressTest > shouldNotContainLocalHosts",
                "message": "Invalid email address 'user@host'",
                "raw_details": "action.testng.report.email.InvalidEmailAddressException: Invalid email address 'user@host'\n\tat action.testng.report.email.EmailAddress.<init>(EmailAddress.java:31)\n\tat action.testng.report.email.EmailAddress.of(EmailAddress.java:23)\n\tat action.testng.report.email.EmailAddressTest.expectException(EmailAddressTest.java:86)\n\tat action.testng.report.email.EmailAddressTest.shouldNotContainLocalHosts(EmailAddressTest.java:31)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:104)\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:645)\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:851)\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1177)\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:129)\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:112)\n\tat org.testng.TestRunner.privateRun(TestRunner.java:756)\n\tat org.testng.TestRunner.run(TestRunner.java:610)\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:387)\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:382)\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:340)\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:289)\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:86)\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1293)\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1218)\n\tat org.testng.TestNG.runSuites(TestNG.java:1133)\n\tat org.testng.TestNG.run(TestNG.java:1104)\n\tat org.apache.maven.surefire.testng.TestNGExecutor.run(TestNGExecutor.java:135)\n\tat org.apache.maven.surefire.testng.TestNGDirectoryTestSuite.executeSingleClass(TestNGDirectoryTestSuite.java:112)\n\tat org.apache.maven.surefire.testng.TestNGDirectoryTestSuite.execute(TestNGDirectoryTestSuite.java:99)\n\tat org.apache.maven.surefire.testng.TestNGProvider.invoke(TestNGProvider.java:146)\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:384)\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:345)\n\tat org.apache.maven.surefire.booter.ForkedBooter.execute(ForkedBooter.java:126)\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:418)"
            },
            {
                "path": "tests/utils/src/test/java/action/testng/report/calc/StringUtilsTest.java",
                "start_line": 14,
                "end_line": 14,
                "start_column": 0,
                "end_column": 0,
                "annotation_level": "failure",
                "title": "StringUtilsTest > require",
                "message": "expected [true] but found [false]",
                "raw_details": "java.lang.AssertionError: expected [true] but found [false]\n\tat org.testng.Assert.fail(Assert.java:94)\n\tat org.testng.Assert.failNotEquals(Assert.java:513)\n\tat org.testng.Assert.assertTrue(Assert.java:42)\n\tat org.testng.Assert.assertTrue(Assert.java:52)\n\tat action.testng.report.calc.StringUtilsTest.require(StringUtilsTest.java:14)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:104)\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:645)\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:851)\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1177)\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:129)\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:112)\n\tat org.testng.TestRunner.privateRun(TestRunner.java:756)\n\tat org.testng.TestRunner.run(TestRunner.java:610)\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:387)\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:382)\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:340)\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:289)\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:86)\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1293)\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1218)\n\tat org.testng.TestNG.runSuites(TestNG.java:1133)\n\tat org.testng.TestNG.run(TestNG.java:1104)\n\tat org.apache.maven.surefire.testng.TestNGExecutor.run(TestNGExecutor.java:135)\n\tat org.apache.maven.surefire.testng.TestNGDirectoryTestSuite.executeMulti(TestNGDirectoryTestSuite.java:193)\n\tat org.apache.maven.surefire.testng.TestNGDirectoryTestSuite.execute(TestNGDirectoryTestSuite.java:94)\n\tat org.apache.maven.surefire.testng.TestNGProvider.invoke(TestNGProvider.java:146)\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:384)\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:345)\n\tat org.apache.maven.surefire.booter.ForkedBooter.execute(ForkedBooter.java:126)\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:418)"
            },
            {
                "path": "tests/utils/src/test/java/action/testng/report/calc/StringUtilsTest.java",
                "start_line": 36,
                "end_line": 36,
                "start_column": 0,
                "end_column": 0,
                "annotation_level": "failure",
                "title": "StringUtilsTest > require_withNullMsg",
                "message": "Input='' didn't match condition.",
                "raw_details": "java.lang.IllegalArgumentException: Input='' didn't match condition.\n\tat action.testng.report.calc.StringUtils.requireNotBlank(StringUtils.java:26)\n\tat action.testng.report.calc.StringUtils.requireNotBlank(StringUtils.java:18)\n\tat action.testng.report.calc.StringUtilsTest.require_withNullMsg(StringUtilsTest.java:36)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:104)\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:645)\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:851)\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1177)\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:129)\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:112)\n\tat org.testng.TestRunner.privateRun(TestRunner.java:756)\n\tat org.testng.TestRunner.run(TestRunner.java:610)\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:387)\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:382)\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:340)\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:289)\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:86)\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1293)\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1218)\n\tat org.testng.TestNG.runSuites(TestNG.java:1133)\n\tat org.testng.TestNG.run(TestNG.java:1104)\n\tat org.apache.maven.surefire.testng.TestNGExecutor.run(TestNGExecutor.java:135)\n\tat org.apache.maven.surefire.testng.TestNGDirectoryTestSuite.executeMulti(TestNGDirectoryTestSuite.java:193)\n\tat org.apache.maven.surefire.testng.TestNGDirectoryTestSuite.execute(TestNGDirectoryTestSuite.java:94)\n\tat org.apache.maven.surefire.testng.TestNGProvider.invoke(TestNGProvider.java:146)\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:384)\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:345)\n\tat org.apache.maven.surefire.booter.ForkedBooter.execute(ForkedBooter.java:126)\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:418)"
            },
            {
                "path": "tests/utils/src/test/java/action/testng/report/calc/CalcUtilsTest.kt",
                "start_line": 27,
                "end_line": 27,
                "start_column": 0,
                "end_column": 0,
                "annotation_level": "failure",
                "title": "CalcUtilsTest > test error handling",
                "message": "Expected IllegalStateException to be thrown, but IllegalArgumentException was thrown",
                "raw_details": "java.lang.AssertionError: Expected IllegalStateException to be thrown, but IllegalArgumentException was thrown\n\tat org.testng.Assert.expectThrows(Assert.java:992)\n\tat org.testng.Assert.assertThrows(Assert.java:967)\n\tat action.testng.report.calc.CalcUtilsTest.test error handling(CalcUtilsTest.kt:27)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:104)\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:645)\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:851)\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1177)\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:129)\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:112)\n\tat org.testng.TestRunner.privateRun(TestRunner.java:756)\n\tat org.testng.TestRunner.run(TestRunner.java:610)\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:387)\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:382)\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:340)\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:289)\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:86)\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1293)\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1218)\n\tat org.testng.TestNG.runSuites(TestNG.java:1133)\n\tat org.testng.TestNG.run(TestNG.java:1104)\n\tat org.apache.maven.surefire.testng.TestNGExecutor.run(TestNGExecutor.java:135)\n\tat org.apache.maven.surefire.testng.TestNGDirectoryTestSuite.executeMulti(TestNGDirectoryTestSuite.java:193)\n\tat org.apache.maven.surefire.testng.TestNGDirectoryTestSuite.execute(TestNGDirectoryTestSuite.java:94)\n\tat org.apache.maven.surefire.testng.TestNGProvider.invoke(TestNGProvider.java:146)\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:384)\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:345)\n\tat org.apache.maven.surefire.booter.ForkedBooter.execute(ForkedBooter.java:126)\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:418)\nCaused by: java.lang.IllegalArgumentException: Amount must have max 2 non-zero decimal places\n\tat action.testng.report.calc.CalcUtils.scaleAmount(CalcUtils.java:50)\n\tat action.testng.report.calc.CalcUtilsTest.scale(CalcUtilsTest.kt:31)\n\tat action.testng.report.calc.CalcUtilsTest.access$scale(CalcUtilsTest.kt:9)\n\tat action.testng.report.calc.CalcUtilsTest$test error handling$1.run(CalcUtilsTest.kt:27)\n\tat org.testng.Assert.expectThrows(Assert.java:984)\n\t... 32 more"
            },
            {
                "path": "tests/utils/src/test/java/action/testng/report/calc/CalcUtilsTest.kt",
                "start_line": 15,
                "end_line": 15,
                "start_column": 0,
                "end_column": 0,
                "annotation_level": "failure",
                "title": "CalcUtilsTest > test scale",
                "message": "Expected <100.11>, actual <100.10>.",
                "raw_details": "java.lang.AssertionError: Expected <100.11>, actual <100.10>.\n\tat kotlin.test.DefaultAsserter.fail(DefaultAsserter.kt:16)\n\tat kotlin.test.Asserter$DefaultImpls.assertTrue(Assertions.kt:196)\n\tat kotlin.test.DefaultAsserter.assertTrue(DefaultAsserter.kt:11)\n\tat kotlin.test.Asserter$DefaultImpls.assertEquals(Assertions.kt:215)\n\tat kotlin.test.DefaultAsserter.assertEquals(DefaultAsserter.kt:11)\n\tat kotlin.test.AssertionsKt__AssertionsKt.assertEquals(Assertions.kt:51)\n\tat kotlin.test.AssertionsKt.assertEquals(Unknown Source)\n\tat kotlin.test.AssertionsKt__AssertionsKt.assertEquals$default(Assertions.kt:50)\n\tat kotlin.test.AssertionsKt.assertEquals$default(Unknown Source)\n\tat action.testng.report.calc.CalcUtilsTest.test scale(CalcUtilsTest.kt:15)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:104)\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:645)\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:851)\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1177)\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:129)\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:112)\n\tat org.testng.TestRunner.privateRun(TestRunner.java:756)\n\tat org.testng.TestRunner.run(TestRunner.java:610)\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:387)\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:382)\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:340)\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:289)\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:86)\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1293)\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1218)\n\tat org.testng.TestNG.runSuites(TestNG.java:1133)\n\tat org.testng.TestNG.run(TestNG.java:1104)\n\tat org.apache.maven.surefire.testng.TestNGExecutor.run(TestNGExecutor.java:135)\n\tat org.apache.maven.surefire.testng.TestNGDirectoryTestSuite.executeMulti(TestNGDirectoryTestSuite.java:193)\n\tat org.apache.maven.surefire.testng.TestNGDirectoryTestSuite.execute(TestNGDirectoryTestSuite.java:94)\n\tat org.apache.maven.surefire.testng.TestNGProvider.invoke(TestNGProvider.java:146)\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:384)\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:345)\n\tat org.apache.maven.surefire.booter.ForkedBooter.execute(ForkedBooter.java:126)\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:418)"
            }
        ]
    }
};

const finishedSuccess = {
    name: 'Test Report',
    head_sha: 'sha123',
    status: 'completed',
    conclusion: 'success',
    output: {
        title: expect.stringMatching(/1 tests: 1 passed, 0 failed. Elapsed \d+ms.$/),
        summary: '',
        annotations: []
    }
};

const masterSuccess = {
    name: 'Test Report',
    head_sha: 'masterSha123',
    status: 'completed',
    conclusion: 'success',
    output: {
        title: expect.stringMatching(/1 tests: 1 passed, 0 failed. Elapsed \d+ms.$/),
        summary: '',
        annotations: []
    }
};

const masterSuccessWithSkipped = {
    name: 'Test Report',
    head_sha: 'masterSha123',
    status: 'completed',
    conclusion: 'success',
    output: {
        title: expect.stringMatching(/1 tests: 1 passed, 0 failed, 0 ignored, 0 skipped. Elapsed \d+ms.$/),
        summary: '',
        annotations: []
    }
};

const nothingFound = {
    name: 'Test Report',
    head_sha: 'sha123',
    status: 'completed',
    conclusion: 'failure',
    output: {
        title: 'No TestNG reports found!',
        summary: '',
        annotations: []
    }
};

const nothingFoundSuccess = {
    name: 'Test Report',
    head_sha: 'sha123',
    status: 'completed',
    conclusion: 'success',
    output: {
        title: '0 tests: 0 passed, 0 failed. Elapsed 0ms.',
        summary: '',
        annotations: []
    }
};

module.exports = { finishedWithFailures, finishedSuccess, nothingFound, masterSuccess, nothingFoundSuccess, masterSuccessWithSkipped };
