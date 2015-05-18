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

## Custom parsers and plugins

Extension is able to re-use globally installed npm modules, only thing you have to do is install them:

```
npm install --global eslint-plugin-react
```
