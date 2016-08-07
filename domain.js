/* eslint no-process-env:0 */
/* global require, exports */

(function () {
  'use strict';

  var PackageJson = require('./package.json');
  var EXTENSION_NAME = PackageJson.name;
  var EXTENSION_UNIQUE_NAME = 'zaggino.' + EXTENSION_NAME;
  var fs = require('fs');
  var path = require('path');
  var cli;
  var currentVersion;
  var nodeVersion = process.versions.node;
  var isOldNode = /^0/.test(nodeVersion);
  var currentProjectRoot = null;
  var currentProjectRootHasConfig = false;
  var defaultCwd = process.cwd();
  var domainName = EXTENSION_UNIQUE_NAME;
  var domainManager = null;
  var globalNodeModulesDirs = [];

  function logError(err) {
    console.error('[' + EXTENSION_NAME + '] ' + err);
  }

  function getCli(eslintPath, opts) {
    // log version to console to check if we're using the correct eslint
    // var pkgVersion = require(eslintPath + '/package.json').version;
    // console.log('using ESLint version', pkgVersion, 'from:', eslintPath);
    var CLIEngine = require(eslintPath || 'eslint').CLIEngine;
    return new CLIEngine(opts);
  }

  function getEslintVersion(eslintPath) {
    return require((eslintPath || 'eslint') + '/package.json').version;
  }

  function refreshEslintCli(eslintPath, opts) {
    try {
      currentVersion = getEslintVersion(eslintPath);
      // brackets can't work with 3.x right now
      if (isOldNode && /^3/.test(currentVersion)) {
        var notSupportedVersion = currentVersion;
        eslintPath = path.resolve(__dirname, 'node_modules', 'eslint');
        currentVersion = getEslintVersion(eslintPath);
        logError(
          'Detected eslint version 3.x (' + notSupportedVersion +
          '), falling back to default eslint ' + currentVersion
        );
      }
      cli = getCli(eslintPath, opts);
    } catch (err) {
      logError(err);
    }

  }

  refreshEslintCli();

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
    var dir = process.platform === 'win32' ? dirPath.replace(/\//g, '\\') : dirPath;
    return path.resolve(dir, 'node_modules');
  }

  function _setProjectRoot(projectRoot, prevProjectRoot) {
    var opts = {};
    var eslintPath;
    var rulesDirPath;
    var ignorePath;

    if (projectRoot) {
      // this is critical for correct .eslintrc resolution
      opts.cwd = projectRoot;

      currentProjectRootHasConfig = fs.readdirSync(projectRoot).some(function (file) {
        return /^\.eslintrc($|\.[a-z]+$)/i.test(file);
      });

      eslintPath = projectRoot + 'node_modules/eslint';
      try {
        if (fs.statSync(eslintPath).isDirectory()) {
          // no action required
        } else {
          throw new Error('not found');
        }
      } catch (ignoreErr) {
        eslintPath = null;
      }

      rulesDirPath = projectRoot + '.eslintrules';
      try {
        if (fs.statSync(rulesDirPath).isDirectory()) {
          opts.rulePaths = [rulesDirPath];
        }
      } catch (ignoreErr) {
        // no action required
      }

      ignorePath = projectRoot + '.eslintignore';
      try {
        if (fs.statSync(ignorePath).isFile()) {
          opts.ignore = true;
          opts.ignorePath = ignorePath;
        }
      } catch (ignoreErr) {
        // no action required
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
      process.chdir(projectRoot);
    } else {
      process.chdir(defaultCwd);
    }
    nodePaths = uniq(nodePaths.concat(globalNodeModulesDirs));
    process.env.NODE_PATH = nodePaths.join(path.delimiter);
    require('module').Module._initPaths();

    // console.log('ESLint NODE_PATH', process.env.NODE_PATH);
    refreshEslintCli(eslintPath, opts);
  }

  function lintFile(fullPath, projectRoot, callback) {
    if (projectRoot !== currentProjectRoot) {
      _setProjectRoot(projectRoot, currentProjectRoot);
      currentProjectRoot = projectRoot;
    }
    if (/(\.ts|\.tsx)$/.test(fullPath) && !currentProjectRootHasConfig) {
      return callback(null, 'typescript-no-config');
    }
    fs.readFile(fullPath, { encoding: 'utf8' }, function (err, text) {
      if (err) {
        return callback(err);
      }
      var relativePath = fullPath.indexOf(projectRoot) === 0 ? fullPath.substring(projectRoot.length) : fullPath;
      var res;
      try {
        process.chdir(projectRoot);
        res = cli.executeOnText(text, relativePath);
        res.eslintVersion = currentVersion;
      } catch (e) {
        err = e.toString();
      }
      return callback(err, res);
    });
  }

  function fixFile(code, fullPath, callback) {
    var res;
    var err;
    try {
      cli.options.fix = true;
      res = cli.executeOnText(code, fullPath);
    } catch (e) {
      err = e;
    }
    cli.options.fix = false;
    callback(err, res);
  }

  require('enable-global-packages').on('ready', function (_globalNodeModulesDirs) {
    globalNodeModulesDirs = _globalNodeModulesDirs;
    _setProjectRoot(currentProjectRoot);
  });

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

    domainManager.registerCommand(
      domainName,
      'fixFile',
      fixFile,
      true,
      'Fixes the current file using the ESLint auto-fixing feature',
      [{
        name: 'code',
        type: 'string'
      }, {
        name: 'fullPath',
        type: 'string'
      }]
    );

  };

}());
