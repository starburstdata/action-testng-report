# GitHub Action: Process TestNG reports

![](https://github.com/wendigo/action-testng-report/workflows/build/badge.svg)

This action processes TestNG XML reports on pull requests and shows the result as a PR check with summary and annotations.

This action is a modified fork of [ScaCap/action-surefire-report](https://github.com/ScaCap/action-surefire-report).

## Inputs

### `github_token`

**Required**. Usually in form of `github_token: ${{ secrets.GITHUB_TOKEN }}`.

### `report_paths`

Optional. [Glob](https://github.com/actions/toolkit/tree/master/packages/glob) expression to TestNG report paths. The default is `**/surefire-reports/testng-results.xml`.

### `check_name`

Optional. Check name to use when creating a check run. The default is `Test Report`.

### `fail_if_empty`

Optional. Defaults to true. Fail if there are none test results found.

### `show_skipped`

Optional. Defaults to false. Show skipped tests count.

### `update_existing_check`

Optional. Defaults to false. Instead of creating new check, update existing check `check_name`.

## Example usage

```yml
name: build
on:
  pull_request:

jobs:
  build:
    name: Build and Run Tests
    runs-on: ubuntu-latest
    steps:
      - name: Checkout Code
        uses: actions/checkout@v1
      - name: Build and Run Tests
        run: mvn test --batch-mode -Dmaven.test.failure.ignore=true
      - name: Publish Test Report
        uses: wendigo/action-testng-report@v1
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
```
