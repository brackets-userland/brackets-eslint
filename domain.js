/*jshint unused:true*/
/*global require, exports*/

(function () {
  'use strict';

  var CLIEngine = require('eslint').CLIEngine;
  var cli;
  var domainName = 'zaggino.brackets-eslint';
  var domainManager = null;

  function lintFile(fullPath) {
    return cli.executeOnFiles([fullPath]);
  }

  function setProjectRoot(projectRoot) {
    cli = new CLIEngine({
      rulePaths: [
        projectRoot + '.eslintrules'
      ]
    });
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
      'setProjectRoot', // command name
      setProjectRoot, // handler function
      false, // is not async
      'Set the rulePaths of ESLint CLIEngine', // description
      [
        {
          name: 'projectRoot',
          type: 'string'
        }
      ]
    );

  };

}());
