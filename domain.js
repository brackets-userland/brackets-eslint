/*jshint unused:true*/
/*global require, exports*/

(function () {
  'use strict';

  var CLIEngine = require('eslint').CLIEngine;
  var cli = new CLIEngine();
  var currentProjectRoot = null;
  var domainName = 'zaggino.brackets-eslint';
  var domainManager = null;

  function _setProjectRoot(projectRoot) {
    cli = new CLIEngine({
      rulePaths: [projectRoot + '.eslintrules']
    });
  }

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
