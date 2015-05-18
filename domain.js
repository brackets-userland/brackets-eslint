/*eslint no-process-env:0*/
/*global require, exports*/

(function () {
  'use strict';

  var fs = require('fs');
  var CLIEngine = require('eslint').CLIEngine;
  var cli = new CLIEngine();
  var currentProjectRoot = null;
  var domainName = 'zaggino.brackets-eslint';
  var domainManager = null;
  var noop = function () {};

  function _setProjectRoot(projectRoot) {
    var opts = {};
    var rulesDirPath;

    if (projectRoot) {
      rulesDirPath = projectRoot + '.eslintrules';
      try {
        if (fs.statSync(rulesDirPath).isDirectory()) {
          opts.rulePaths = [rulesDirPath];
        }
      } catch (e) {
        // no action required
        noop(e);
      }
    }

    cli = new CLIEngine(opts);
  }

  require('enable-global-packages').on('ready', function () {
    // global packages are available now
    _setProjectRoot(currentProjectRoot);
  });

  function lintFile(fullPath, projectRoot) {
    if (projectRoot !== currentProjectRoot) {
      _setProjectRoot(projectRoot);
      currentProjectRoot = projectRoot;
    }
    return cli.executeOnFiles([fullPath]);
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
      'lintFile', // command name
      lintFile, // handler function
      false, // is not async
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
