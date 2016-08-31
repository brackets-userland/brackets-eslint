import {
  CodeInspectionReport
} from '../node_modules/brackets-inspection-gutters/src/main';

define((require, exports, module) => {

  // imports
  const CodeInspection = brackets.getModule('language/CodeInspection');
  const ProjectManager = brackets.getModule('project/ProjectManager');
  const ExtensionUtils = brackets.getModule('utils/ExtensionUtils');
  const NodeDomain = brackets.getModule('utils/NodeDomain');
  const CommandManager = brackets.getModule('command/CommandManager');
  const Menus = brackets.getModule('command/Menus');
  const DocumentManager = brackets.getModule('document/DocumentManager');
  const EditorManager = brackets.getModule('editor/EditorManager');
  const PreferencesManager = brackets.getModule('preferences/PreferencesManager');
  const PackageJson = JSON.parse(require('text!../package.json'));
  const EXTENSION_NAME = PackageJson.name;
  const EXTENSION_UNIQUE_NAME = 'zaggino.' + EXTENSION_NAME;
  const AUTOFIX_COMMAND_ID = EXTENSION_UNIQUE_NAME + '.autofix';
  const AUTOFIX_COMMAND_NAME = 'Auto-fix with ESLint';
  const log = require('./log');

  // Load extension modules that are not included by core
  const preferences = PreferencesManager.getExtensionPrefs(EXTENSION_NAME);

  // Setup preferences used by the extension
  preferences.definePreference('gutterMarks', 'boolean', true);
  preferences.set('gutterMarks', preferences.get('gutterMarks'));

  // Constants
  const LINTER_NAME = 'ESLint';
  const nodeDomain = new NodeDomain(EXTENSION_UNIQUE_NAME, ExtensionUtils.getModulePath(module, './node/domain'));

  function handleLintSync(text: string, fullPath: string): never {
    throw new Error('ESLint sync is not available, use async for ' + fullPath);
  }

  function handleLintAsync(text: string, fullPath: string): JQueryPromise<CodeInspectionReport> {
    const deferred = $.Deferred();
    const projectRoot = ProjectManager.getProjectRoot().fullPath;
    nodeDomain.exec('lintFile', fullPath, projectRoot)
      .then((report: CodeInspectionReport) => {
        // set gutter marks using brackets-inspection-gutters module
        const w = (<any> window);
        if (w.bracketsInspectionGutters) {
          w.bracketsInspectionGutters.set(
            EXTENSION_UNIQUE_NAME, fullPath, report, preferences.get('gutterMarks', projectRoot)
          );
        } else {
          log.error(`No bracketsInspectionGutters found on window, gutters disabled.`);
        }
        deferred.resolve(report);
      }, (err) => {
        deferred.reject(err);
      });
    return deferred.promise();
  }

  function handleAutoFix() {
    const doc = DocumentManager.getCurrentDocument();
    const language = doc.getLanguage();
    const fileType = language._id;
    const fullPath = doc.file.fullPath;
    const editor = EditorManager.getCurrentFullEditor();
    const cursor = editor.getCursorPos();
    const scroll = editor.getScrollPos();

    // Do nothing unless it's a Javascript file
    if (fileType !== 'javascript') {
      return;
    }

    const projectRoot = ProjectManager.getProjectRoot().fullPath;
    nodeDomain.exec('fixFile', projectRoot, fullPath, doc.getText())
      .then((response) => {
        const text = response && response.results[0] ? response.results[0].output : '';
        if (text) {
          doc.setText(text);
        }

        // Reset editor back to previous cursor position
        editor.setCursorPos(cursor);
        editor.setScrollPos(scroll.x, scroll.y);
      }, (err) => {
        log.error(`fixFile -> error: ${err}`);
      });
  }

  // =================================================================================

  // Register the auto-fix command
  CommandManager.register(AUTOFIX_COMMAND_NAME, AUTOFIX_COMMAND_ID, handleAutoFix);

  // Add to Edit menu
  const editMenu = Menus.getMenu(Menus.AppMenuBar.EDIT_MENU);
  editMenu.addMenuDivider();
  editMenu.addMenuItem(AUTOFIX_COMMAND_ID);

  // Add context-menu option (only for Javascript files)
  const contextMenu = Menus.getContextMenu(Menus.ContextMenuIds.EDITOR_MENU);
  contextMenu.addMenuItem(AUTOFIX_COMMAND_ID);

  // register a linter with CodeInspection
  ['javascript', 'jsx', 'typescript', 'tsx'].forEach((langId) => {
    CodeInspection.register(langId, {
      name: LINTER_NAME,
      scanFile: handleLintSync,
      scanFileAsync: handleLintAsync
    });
  });

});
