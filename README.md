# ESLint

Brackets extension which provides file linting with ESLint.

Uses CLIEngine from https://www.npmjs.com/package/eslint
which should provide same results as linting in the command line (respecting all .eslintrc files)

Includes support for `esprima` and `esprima-fb` parsers.

## Install

Use [extension registry](https://brackets-registry.aboutweb.com/)

## Configuration

use standard `.eslintrc` file like this:

```
parser:
  "esprima-fb"
settings:
  ecmascript: 6
ecmaFeatures:
  jsx: true
env:
  browser: true
```
