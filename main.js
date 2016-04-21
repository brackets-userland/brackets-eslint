/* global $, brackets, define */

define(function (require, exports, module) {
  'use strict';

  // imports
  var CodeInspection = brackets.getModule('language/CodeInspection');
  var ProjectManager = brackets.getModule('project/ProjectManager');
  var ExtensionUtils = brackets.getModule('utils/ExtensionUtils');
  var NodeDomain = brackets.getModule('utils/NodeDomain');
  var CommandManager = brackets.getModule('command/CommandManager');
  var Menus = brackets.getModule('command/Menus');
  var DocumentManager = brackets.getModule('document/DocumentManager');
  var EditorManager = brackets.getModule('editor/EditorManager');
  var EXTENSION_KEY = 'zaggino.brackets-eslint';
  var AUTOFIX_COMMAND_ID = EXTENSION_KEY + '.autofix';
  var AUTOFIX_COMMAND_NAME = 'Auto-fix with ESLint';

   // Load extension modules that are not included by core
  var gutterManager = require('src/GutterManager')();
  var prefsManager = require('src/PreferencesManager')(EXTENSION_KEY);

  // constants
  var LINTER_NAME = 'ESLint';
  var nodeDomain = new NodeDomain(EXTENSION_KEY, ExtensionUtils.getModulePath(module, 'domain'));

  // Load CSS
  ExtensionUtils.loadStyleSheet(module, 'styles/brackets-eslint.less');

  // this will map ESLint output to match format expected by Brackets
  function remapResults(results, version) {
    var SEVERITY_ERROR = 2;
    var SEVERITY_WARNING = 1;

    function mapResult(result) {
      var offset = version < 1 ? 0 : 1;
      var message = result.message;
      if (result.ruleId) {
        message += ' [' + result.ruleId + ']';
      }
      var severity;
      switch (result.severity) {
      case SEVERITY_ERROR:
        severity = 'ERROR: ';
        break;
      case SEVERITY_WARNING:
        severity = 'WARNING: ';
        break;
      default:
        severity = 'UNKNOWN: ';
      }
      return {
        message: severity + message,
        pos: {
          line: result.line - 1,
          ch: result.column - offset
        },
        type: result.ruleId
      };
    }

    return {
      errors: results.map(mapResult)
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
        if (report.results.length > 1) {
          // console.warn('ESLint returned multiple results, where only one set was expected');
        }
        var results = report.results[0];
        // if version is missing, assume 1
        var version = report.eslintVersion ? report.eslintVersion.split('.')[0] : 1;
        var remapped = remapResults(results.messages, version);
        if (prefsManager.gutter) {
          gutterManager.setGutterMarkers(results.messages);
          gutterManager.refresh(fullPath);
        }
        deferred.resolve(remapped);
      }, function (err) {
        deferred.reject(err);
      });

    return deferred.promise();
  }

  function handleAutoFix() {
    var doc = DocumentManager.getCurrentDocument();
    var language = doc.getLanguage();
    var fileType = language._id;
    var fullPath = doc.file.fullPath;
    var editor = EditorManager.getCurrentFullEditor();
    var cursor = editor.getCursorPos();
    var scroll = editor.getScrollPos();

    // Do nothing unless it's a Javascript file
    if (fileType !== 'javascript') {
      return;
    }

    nodeDomain.exec('fixFile', doc.getText(), fullPath)
      .then(function (response) {
        var text = response && response.results[0] ? response.results[0].output : '';
        if (text) {
          doc.setText(text);
        }

        // Reset editor back to previous cursor position
        editor.setCursorPos(cursor);
        editor.setScrollPos(scroll.x, scroll.y);
      }/* TODO: Error handling?*/);
  }

  // =================================================================================

  // Register the auto-fix command
  CommandManager.register(AUTOFIX_COMMAND_NAME, AUTOFIX_COMMAND_ID, handleAutoFix);

  // Add to Edit menu
  var editMenu = Menus.getMenu(Menus.AppMenuBar.EDIT_MENU);
  editMenu.addMenuDivider();
  editMenu.addMenuItem(AUTOFIX_COMMAND_ID);

  // Add context-menu option (only for Javascript files)
  var contextMenu = Menus.getContextMenu(Menus.ContextMenuIds.EDITOR_MENU);
  contextMenu.addMenuItem(AUTOFIX_COMMAND_ID);

  // register a linter with CodeInspection
  ['javascript', 'jsx'].forEach(function (langId) {
    CodeInspection.register(langId, {
      name: LINTER_NAME,
      scanFile: handleLintSync,
      scanFileAsync: handleLintAsync
    });
  });

});
