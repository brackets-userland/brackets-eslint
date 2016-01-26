/*eslint no-process-env:0*/
/*global require, exports*/

(function () {
  'use strict';

  function getCli(eslintPath, opts) {
    eslintPath = eslintPath || 'eslint';

    // log version to console to check if we're using the correct eslint
    // var pkgVersion = require(eslintPath + '/package.json').version;
    // console.log('using ESLint version', pkgVersion, 'from:', eslintPath);

    var CLIEngine = require(eslintPath).CLIEngine;
    return new CLIEngine(opts);
  }

  function eslintVersion(eslintPath) {
    eslintPath = eslintPath || 'eslint';
    var pkgVersion = require(eslintPath + '/package.json').version;
    return pkgVersion;
  }

  var fs = require('fs');
  var path = require('path');
  var cli = getCli();
  var currentVersion = eslintVersion();
  var currentProjectRoot = null;
  var domainName = 'zaggino.brackets-eslint';
  var domainManager = null;
  var noop = function () {};

  function uniq(arr) {
    return arr.reduce(function (result, item) {
      if (result.indexOf(item) === -1) {
        result.push(item);
      }
      return result;
    }, []);
  }

  function normalizeDir(dirPath) {
    if (dirPath.match(/(\\|\/)$/)) {
      dirPath = dirPath.slice(0, -1);
    }
    return process.platform === 'win32' ? dirPath.replace(/\//g, '\\') : dirPath;
  }

  function _setProjectRoot(projectRoot, prevProjectRoot) {
    var opts = {};
    var eslintPath;
    var rulesDirPath;
    var ignorePath;

    if (projectRoot) {
      eslintPath = projectRoot + 'node_modules/eslint';
      try {
        if (fs.statSync(eslintPath).isDirectory()) {
          // no action required
        } else {
          throw new Error('not found');
        }
      } catch (e) {
        eslintPath = null;
      }

      rulesDirPath = projectRoot + '.eslintrules';
      try {
        if (fs.statSync(rulesDirPath).isDirectory()) {
          opts.rulePaths = [rulesDirPath];
        }
      } catch (e) {
        // no action required
        noop(e);
      }

      ignorePath = projectRoot + '.eslintignore';
      try {
        if (fs.statSync(ignorePath).isFile()) {
          opts.ignore = true;
          opts.ignorePath = ignorePath;
        }
      } catch (e) {
        // no action required
        noop(e);
      }
    }

    // make sure plugins are loadable from current project directory
    var nodePaths = process.env.NODE_PATH ? process.env.NODE_PATH.split(path.delimiter) : [];
    var io;
    if (prevProjectRoot) {
      // remove from NODE_PATH
      prevProjectRoot = normalizeDir(prevProjectRoot);
      io = nodePaths.indexOf(prevProjectRoot);
      if (io !== -1) {
        nodePaths.splice(io, 1);
      }
    }
    if (projectRoot) {
      // add to NODE_PATH
      projectRoot = normalizeDir(projectRoot);
      nodePaths = [projectRoot].concat(nodePaths);
    }
    nodePaths = uniq(nodePaths);
    process.env.NODE_PATH = nodePaths.join(path.delimiter);
    require('module').Module._initPaths();

    // console.log('ESLint NODE_PATH', process.env.NODE_PATH);

    cli = getCli(eslintPath, opts);
    currentVersion = eslintVersion(eslintPath);
  }

  require('enable-global-packages').on('ready', function () {
    // global packages are available now
    _setProjectRoot(currentProjectRoot);
  });

  function lintFile(fullPath, projectRoot, callback) {
    if (projectRoot !== currentProjectRoot) {
      _setProjectRoot(projectRoot, currentProjectRoot);
      currentProjectRoot = projectRoot;
    }
    fs.readFile(fullPath, {encoding: 'utf8'}, function (err, text) {
      if (err) {
        return callback(err);
      }
      var relativePath = fullPath.indexOf(projectRoot) === 0 ? fullPath.substring(projectRoot.length) : fullPath;

      // this is important for ESLint so .eslintrc is properly loaded
      // we could go around this by parsing .eslintrc manually but that'd
      // bring complexity we don't need here right now
      process.chdir(projectRoot);

      var res;
      try {
        res = cli.executeOnText(text, relativePath);
      } catch (e) {
        err = e.toString();
      }
      callback(err, res);
    });
  }

  function getESLintVersion() {
    return currentVersion;
  }

  exports.init = function (_domainManager) {
    domainManager = _domainManager;

    if (!domainManager.hasDomain(domainName)) {
      domainManager.registerDomain(domainName, {
        major: 0,
        minor: 1
      });
    }

    domainManager.registerCommand(
      domainName,
      'getESLintVersion',
      getESLintVersion,
      false,
      'get the version of currently used ESLint',
      []
    );

    domainManager.registerCommand(
      domainName,
      'lintFile', // command name
      lintFile, // handler function
      true, // is async
      'lint given file with eslint', // description
      [
        {
          name: 'fullPath',
          type: 'string'
        },
        {
          name: 'projectRoot',
          type: 'string'
        }
      ], [
        {
          name: 'report',
          type: 'object'
        }
      ]
    );

  };

}());
