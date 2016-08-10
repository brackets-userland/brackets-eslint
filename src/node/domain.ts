import * as esLint from './eslint';

const PackageJson = require('../../package.json');
const EXTENSION_NAME = PackageJson.name;
const EXTENSION_UNIQUE_NAME = 'zaggino.' + EXTENSION_NAME;
const domainName = EXTENSION_UNIQUE_NAME;

let domainManager = null;

esLint.refreshEslintCli();

require('enable-global-packages').on('ready', function () {
  esLint.setProjectRoot();
});

exports.init = function (_domainManager) {
  domainManager = _domainManager;

  if (!domainManager.hasDomain(domainName)) {
    domainManager.registerDomain(domainName, { major: 0, minor: 1 });
  }

  domainManager.registerCommand(
    domainName,
    'lintFile', // command name
    esLint.lintFile, // handler function
    true, // is async
    'lint given file with eslint', // description
    [
      { name: 'fullPath', type: 'string' },
      { name: 'projectRoot', type: 'string' }
    ], [
      { name: 'report', type: 'object' }
    ]
  );

  domainManager.registerCommand(
    domainName,
    'fixFile',
    esLint.fixFile,
    true,
    'Fixes the current file using the ESLint auto-fixing feature',
    [
      { name: 'projectRoot', type: 'string' },
      { name: 'fullPath', type: 'string' },
      { name: 'code', type: 'string' }
    ]
  );

};
