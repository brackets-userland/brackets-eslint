import { CodeInspectionReport, CodeInspectionResult, CodeInspectionResultType } from '../types';

export interface ESLint {
  CLIEngine: {
    new(opts: ESLintOptions): ESLintCLIEngine;
  };
}

export interface ESLintOptions {
  cwd?: string;
  rulePaths?: Array<string>;
  ignore?: boolean;
  ignorePath?: string;
  baseConfig?: Object;
}

export interface ESLintCLIEngine {
  executeOnText: Function;
  options: {
    fix: boolean;
  };
}

const PackageJson = require('../../package.json');
const EXTENSION_NAME = PackageJson.name;
const fs = require('fs');
const path = require('path');
const nodeVersion = process.versions.node;
const isOldNode = /^0/.test(nodeVersion);
const defaultCwd = process.cwd();
const ESLINT_SEVERITY_ERROR = 2;
const ESLINT_SEVERITY_WARNING = 1;
const BRACKETS_TYPE_ERROR = 'problem_type_error';
const BRACKETS_TYPE_WARNING = 'problem_type_warning';
const BRACKETS_TYPE_META = 'problem_type_meta';

let cli: ESLintCLIEngine | null = null;
let currentVersion: string | null = null;
let currentProjectRoot: string | null = null;
let currentProjectRootHasConfig: boolean = false;
let erroredLastTime: boolean = true;

const log = {
  info: (...args: any[]) => console.log('[' + EXTENSION_NAME + ']', ...args),
  warn: (...args: any[]) => console.warn('[' + EXTENSION_NAME + ']', ...args),
  error: (...args: any[]) => console.error('[' + EXTENSION_NAME + ']', ...args)
};

function getCli(eslintPath: string, opts: ESLintOptions): ESLintCLIEngine | null {
  let _realPath: string;
  try {
    _realPath = require.resolve(eslintPath);
  } catch (err) {
    log.error(`Wasn't able to resolve path to eslint: ${err.stack}`);
    return null;
  }

  let _eslint: ESLint;
  try {
    _eslint = require(eslintPath);
  } catch (err) {
    log.error(`Wasn't able to load eslint from ${_realPath}, be sure to run 'npm install' properly: ${err.stack}`);
    return null;
  }

  if (!_eslint.CLIEngine) {
    log.error(`No CLIEngine found for eslint loaded from ${_realPath}, which version are you using?`);
    return null;
  }

  return new _eslint.CLIEngine(opts);
}

function getEslintVersion(eslintPath: string): string {
  return require(eslintPath + '/package.json').version;
}

export function refreshEslintCli(eslintPath: string | null, opts: ESLintOptions, allowLocalEslint: boolean) {
  if (eslintPath == null) {
    if (allowLocalEslint) {
      eslintPath = 'eslint';
    } else {
      currentVersion = null;
      cli = null;
      return;
    }
  }
  try {
    currentVersion = getEslintVersion(eslintPath);
    cli = getCli(eslintPath, opts);
  } catch (err) {
    log.error(err);
  }
}

function uniq<T>(arr: T[]): T[] {
  return arr.reduce((result: T[], item: T) => {
    if (result.indexOf(item) === -1) {
      result.push(item);
    }
    return result;
  }, []);
}

function normalizeDir(dirPath: string) {
  if (dirPath.match(/(\\|\/)$/)) {
    dirPath = dirPath.slice(0, -1);
  }
  return process.platform === 'win32' ? dirPath.replace(/\//g, '\\') : dirPath;
}

function nodeModulesInDir(dirPath: string) {
  return path.resolve(normalizeDir(dirPath), 'node_modules');
}

export function setProjectRoot(projectRoot: string | null, prevProjectRoot: string | null) {
  // refresh when called without arguments
  if (!projectRoot) { projectRoot = currentProjectRoot; }

  const opts: ESLintOptions = {};
  let eslintPath: string | null = null;
  let rulesDirPath: string;
  let ignorePath: string;
  let allowLocalEslint: boolean = true;

  if (projectRoot) {
    // this is critical for correct .eslintrc resolution
    opts.cwd = projectRoot;

    try {
      currentProjectRootHasConfig = fs.readdirSync(projectRoot).some((file: string) => {
        return /^\.eslintrc($|\.[a-z]+$)/i.test(file);
      });
    } catch (err) {
      log.warn(`Failed to read contents of ${projectRoot}: ${err}`);
      currentProjectRootHasConfig = false;
    }

    if (!currentProjectRootHasConfig) {
      opts.baseConfig = { extends: 'eslint:recommended' };
    }

    // only allow use of local eslint when no configuration is present in the project
    allowLocalEslint = !currentProjectRootHasConfig;

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
  let nodePaths = process.env.NODE_PATH ? process.env.NODE_PATH.split(path.delimiter) : [];

  // remove previous from NODE_PATH
  if (prevProjectRoot) {
    let io = nodePaths.indexOf(nodeModulesInDir(prevProjectRoot));
    if (io !== -1) {
      nodePaths.splice(io, 1);
    }
  }

  // add current to NODE_PATH
  if (projectRoot) {
    nodePaths = [nodeModulesInDir(projectRoot)].concat(nodePaths);
    process.chdir(normalizeDir(projectRoot));
  } else {
    process.chdir(defaultCwd);
  }

  nodePaths = uniq(nodePaths);
  process.env.NODE_PATH = nodePaths.join(path.delimiter);
  require('module').Module._initPaths();

  // console.log('ESLint NODE_PATH', process.env.NODE_PATH);
  refreshEslintCli(eslintPath, opts, allowLocalEslint);
}

function mapEslintMessage(result: any, majorVersion: number): CodeInspectionResult {
  const offset = majorVersion < 1 ? 0 : 1;

  let message: string;
  let type: CodeInspectionResultType;
  switch (result.severity) {
    case ESLINT_SEVERITY_ERROR:
      message = 'ERROR: ';
      type = BRACKETS_TYPE_ERROR as CodeInspectionResultType;
      break;
    case ESLINT_SEVERITY_WARNING:
      message = 'WARNING: ';
      type = BRACKETS_TYPE_WARNING as CodeInspectionResultType;
      break;
    default:
      message = 'UNKNOWN: ';
      type = BRACKETS_TYPE_META as CodeInspectionResultType;
  }

  message += result.message;
  if (result.ruleId) { message += ' [' + result.ruleId + ']'; }

  return {
    type,
    message,
    pos: {
      line: result.line - 1,
      ch: result.column - offset
    }
  };
}

function createCodeInspectionReport(eslintReport: any): CodeInspectionReport {
  // if version is missing, assume 1
  const version = eslintReport.eslintVersion ? eslintReport.eslintVersion.split('.')[0] : 1;
  const results = eslintReport.results ? eslintReport.results[0] : null;
  const messages = results ? results.messages : [];
  return {
    errors: messages.map((x: any) => mapEslintMessage(x, version))
  };
}

function createUserError(message: string): CodeInspectionReport {
  erroredLastTime = true;
  return {
    errors: [{
      type: 'problem_type_error',
      message,
      pos: { line: 0, ch: 0 }
    }]
  };
}

export function lintFile(
  projectRoot: string, fullPath: string, text: string, callback: (err: Error | null, res?: CodeInspectionReport) => void
) {
  if (isOldNode && (!currentVersion || /^3/.test(currentVersion))) {
    return callback(null, createUserError(
      `ESLintError: Legacy node process detected, please update to Brackets 1.8 or Brackets-Electron`
    ));
  }
  if (erroredLastTime || projectRoot !== currentProjectRoot) {
    try {
      setProjectRoot(projectRoot, currentProjectRoot);
      currentProjectRoot = projectRoot;
      erroredLastTime = false;
    } catch (err) {
      log.error(`Error thrown in setProjectRoot: ${err.stack}`);
    }
  }
  if (/(\.ts|\.tsx)$/.test(fullPath) && !currentProjectRootHasConfig) {
    return callback(null, { errors: [] });
  }
  if (cli == null) {
    if (currentProjectRootHasConfig) {
      return callback(null, createUserError(
        `ESLintError: You need to install ESLint in your project folder with 'npm install eslint'`
      ));
    } else {
      return callback(null, createUserError(
        `ESLintError: No ESLint cli is available, try reinstalling the extension`
      ));
    }
  }
  const relativePath = fullPath.indexOf(projectRoot) === 0 ? fullPath.substring(projectRoot.length) : fullPath;
  let res: any;
  let err: Error | null = null;
  try {
    res = cli.executeOnText(text, relativePath);
    res.eslintVersion = currentVersion;
  } catch (e) {
    log.error(`Error thrown in executeOnText: ${e.stack}`);
    err = e;
    erroredLastTime = true;
  }
  return callback(err, res ? createCodeInspectionReport(res) : void 0);
}

export function fixFile(
  projectRoot: string, fullPath: string, text: string, callback: (err: Error | null, res?: any) => void
) {
  if (cli == null) {
    return callback(new Error(`ESLintError: No ESLint cli is available, try reinstalling the extension`));
  }
  let res: any;
  let err: Error | null = null;
  cli.options.fix = true;
  try {
    process.chdir(projectRoot);
    res = cli.executeOnText(text, fullPath);
    res.eslintVersion = currentVersion;
  } catch (e) {
    log.error(e.stack);
    err = e;
  } finally {
    cli.options.fix = false;
  }
  callback(err, res);
}
