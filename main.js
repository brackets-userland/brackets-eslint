/*global $, brackets, define*/

define(function (require, exports, module) {
  'use strict';

  if (false) { window.alert(); }

  // imports
  var _ = brackets.getModule('thirdparty/lodash');
  var CodeInspection = brackets.getModule('language/CodeInspection');
  var LanguageManager = brackets.getModule('language/LanguageManager');
  var ProjectManager = brackets.getModule('project/ProjectManager');
  var ExtensionUtils = brackets.getModule('utils/ExtensionUtils');
  var NodeDomain = brackets.getModule('utils/NodeDomain');

  // constants
  var JS_LANGUAGE = LanguageManager.getLanguageForExtension('js');
  var LINTER_NAME = 'ESLint';
  var nodeDomain = new NodeDomain('zaggino.brackets-eslint', ExtensionUtils.getModulePath(module, 'domain'));

  // register jsx and es6 as javascript file extensions in Brackets
  ['es', 'es6', 'jsx'].forEach(function (ext) {
    if (!LanguageManager.getLanguageForExtension(ext)) {
      JS_LANGUAGE.addFileExtension(ext);
    }
  });

  // this will map ESLint output to match format expected by Brackets
  function remapResults(results) {
    return {
      errors: results.map(function (result) {
        var message = result.message;
        if (result.ruleId) {
          message += ' [' + result.ruleId + ']';
        }
        return {
          message: message,
          pos: {
            line: result.line - 1,
            ch: result.column
          },
          type: result.ruleId
        };
      })
    };
  }

  function handleLintSync(text, fullPath) {
    throw new Error('ESLint sync is not available, use async for ' + fullPath);
  }

  function handleLintAsync(text, fullPath) {
    var deferred = new $.Deferred();
    var projectRoot = ProjectManager.getProjectRoot().fullPath;

    nodeDomain.exec('lintFile', fullPath, projectRoot)
      .then(function (report) {
        var results = _.find(report.results, {
          filePath: fullPath
        });
        var remapped = remapResults(results.messages);
        deferred.resolve(remapped);
      }, function (err) {
        deferred.reject(err);
      });

    return deferred.promise();
  }

  // register a linter with CodeInspection
  CodeInspection.register(JS_LANGUAGE.getId(), {
    name: LINTER_NAME,
    scanFile: handleLintSync,
    scanFileAsync: handleLintAsync
  });

});
