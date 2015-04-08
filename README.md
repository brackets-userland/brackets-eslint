# ESLint [![Build Status](https://travis-ci.org/zaggino/brackets-eslint.svg?branch=master)](https://travis-ci.org/zaggino/brackets-eslint)

Brackets extension which provides file linting with ESLint.

Uses CLIEngine from [https://www.npmjs.com/package/eslint](https://www.npmjs.com/package/eslint)
which should provide same results as linting in the command line (respecting all .eslintrc files)

Includes support for [custom parsers](#supported-parsers) and [plugins](#supported-plugins).

## How to install

Use [brackets-npm-registry](https://github.com/zaggino/brackets-npm-registry)

## How to configure

Use standard `.eslintrc` file like [this one](.eslintrc)

## How to use custom rules

Move them to `.eslintrules` folder in your project root like you can see in this repo.

## Supported parsers

- [babel-eslint](https://www.npmjs.com/package/babel-eslint)
- [esprima](https://www.npmjs.com/package/esprima)
- [esprima-fb](https://www.npmjs.com/package/esprima-fb)

## Supported plugins

- [react](https://www.npmjs.com/package/eslint-plugin-react)
