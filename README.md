# ESLint [![Build Status](https://travis-ci.org/zaggino/brackets-eslint.svg?branch=master)](https://travis-ci.org/zaggino/brackets-eslint)

Brackets extension which provides file linting with ESLint.

Uses CLIEngine from [https://www.npmjs.com/package/eslint](https://www.npmjs.com/package/eslint)
which should provide same results as linting in the command line (respecting all .eslintrc files)

Includes support for [custom parsers and plugins](#custom-parsers-and-plugins).

## How to install

Use [brackets-npm-registry](https://github.com/zaggino/brackets-npm-registry)

## How to configure

Use standard `.eslintrc` file like [this one](https://github.com/adobe/brackets/blob/master/.eslintrc.js)

[Configuring ESLint](http://eslint.org/docs/user-guide/configuring)

[More information here](https://github.com/zaggino/brackets-eslint/issues/46)

## How to use custom rules

Move them to `.eslintrules` folder in your project root like you can see in this repo.

## Custom parsers and plugins

Extension uses eslint plugins installed in the current project. If you're missing a plugin, then in your project directory do:

```
npm install eslint-plugin-react
```

## Configuration defaults

To disable the both warning and error icons in the gutter you can configure the `brackets.json` as followed:

```JSON
{
  "brackets-eslint.gutterMarks": false
}
```

or only disable warnings icons:

```JSON
{
  "brackets-eslint.gutterMarks": { "error": true, "warning" : false }
}
```

To force the extension to use its own local version of ESLint:

```JSON
{
  "brackets-eslint.useLocalESLint": true
}
```
