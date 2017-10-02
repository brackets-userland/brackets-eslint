# ESLint [![Build Status](https://travis-ci.org/brackets-userland/brackets-eslint.svg?branch=master)](https://travis-ci.org/brackets-userland/brackets-eslint)

> **Heads up!** Beginning with version 1.11, Brackets now includes a prepackaged version of ESLint. If you want to get the possible benefits of `brackets-eslint` such as quicker release cycle, you might have to uninstall the default extension first via Extension Manager -> Installed -> ESLint.

Brackets extension which provides file linting with ESLint.

Uses CLIEngine from [https://www.npmjs.com/package/eslint](https://www.npmjs.com/package/eslint)
which should provide same results as linting in the command line (respecting all .eslintrc files)

Includes support for [custom parsers and plugins](#custom-parsers-and-plugins).

## How to install

Use [brackets-npm-registry](https://github.com/brackets-userland/brackets-npm-registry)

## How to configure

Use standard `.eslintrc` file like [this one](https://github.com/adobe/brackets/blob/master/.eslintrc.js)

[Configuring ESLint](http://eslint.org/docs/user-guide/configuring)

[More information here](https://github.com/brackets-userland/brackets-eslint/issues/46)

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

## Publishing new version of the extension

clone:
```
https://github.com/brackets-userland/brackets-eslint
cd brackets-eslint
```

get latest version from origin (discarding local changes):
```
git fetch origin
git reset --hard origin/master
git status (should say 'nothing to commit, working tree clean')
```

make sure the extension is built locally:
```
npm install
```

raise the version & publish:
```
npm version [major | minor | patch]
git push
git push --tags
npm publish
```

pack all except `.git` and `node_modules` folders into a zip file and upload to brackets-registry
one thing here - someone's blocking 'brackets-eslint' name so I rename the name of the extension to:
```
"name": "zaggino.brackets-eslint",
```
before zipping in package.json, maybe ask registry maintainers to look into this
after zipping just do `git reset --hard` to revert again
