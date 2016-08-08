import { CodeInspectionReport, CodeInspectionResult, GutterOptions } from './main.d.ts';

define(function (require, exports, module) {

  // Brackets modules
  const _ = brackets.getModule('thirdparty/lodash');
  const DocumentManager = brackets.getModule('document/DocumentManager');
  const ExtensionUtils = brackets.getModule('utils/ExtensionUtils');
  const MainViewManager = brackets.getModule('view/MainViewManager');
  const EditorManager = brackets.getModule('editor/EditorManager');

  ExtensionUtils.loadStyleSheet(module, './styles.less');
  // constants from stylesheet
  const GUTTER_NAME = 'brackets-inspection-gutter';
  const GUTTER_MARKER_NAME = 'brackets-inspection-gutter-marker';
  const GUTTER_WARNING_CLASS = 'brackets-inspection-gutter-warning';
  const GUTTER_ERROR_CLASS = 'brackets-inspection-gutter-error';
  const CM_LINE_NUMBER_GUTTER = 'CodeMirror-linenumbers';

  const markers = {};
  const editorsWithGutters = [];

  function prepareGutter(editor) {
    // add our gutter if its not already available
    const cm = editor._codeMirror;

    const gutters = cm.getOption('gutters').slice(0);
    if (gutters.indexOf(GUTTER_NAME) === -1) {
      // add the gutter just before the linenumbers if possible
      let cmLineNumberIdx = gutters.indexOf(CM_LINE_NUMBER_GUTTER);
      cmLineNumberIdx = cmLineNumberIdx === -1 ? 0 : cmLineNumberIdx;

      gutters.splice(cmLineNumberIdx, 0, GUTTER_NAME);
      cm.setOption('gutters', gutters);
    }

    if (editorsWithGutters.indexOf(editor) === -1) {
      editorsWithGutters.push(editor);
    }
  }

  function removeGutter(editor) {
    const cm = editor._codeMirror;
    if (!cm) {
      return;
    }

    const gutters = cm.getOption('gutters').slice(0);
    const io = gutters.indexOf(GUTTER_NAME);

    if (io !== -1) {
      gutters.splice(io, 1);
      cm.clearGutter(GUTTER_NAME);
      cm.setOption('gutters', gutters);
    }

    delete cm.eslintGutters;
  }

  function prepareGutters(editors) {
    editors.forEach(function (editor) {
      prepareGutter(editor);
    });
      // clear the rest
    let idx = editorsWithGutters.length;
    while (idx--) {
      if (editors.indexOf(editorsWithGutters[idx]) === -1) {
        removeGutter(editorsWithGutters[idx]);
        editorsWithGutters.splice(idx, 1);
      }
    }
  }

  function showGutters(editor, fullPath: string) {

    let markersForFile: Array<CodeInspectionResult> = Object.keys(markers[fullPath]).reduce((arr, sourceId) => {
      return arr.concat(markers[fullPath][sourceId]);
    }, []);

    // sortBy severity and then line number
    markersForFile = _.sortBy(markersForFile, (obj) => [obj.type, obj.pos.line]);

    const cm = editor._codeMirror;

    cm.clearGutter(GUTTER_NAME);

    markersForFile.forEach(function (obj: CodeInspectionResult) {
      const severity = obj.type === 'problem_type_error' ? GUTTER_ERROR_CLASS : GUTTER_WARNING_CLASS;
      const $marker = $('<div><span>')
                        .attr('title', obj.message)
                        .addClass(GUTTER_MARKER_NAME);
      $marker.find('span')
        .addClass(severity)
        .html('&nbsp;');
      cm.setGutterMarker(obj.pos.line, GUTTER_NAME, $marker[0]);
    });
  }

  function set(
    sourceId: string, fullPath: string, report: CodeInspectionReport, options: boolean | GutterOptions = true
  ) {

    // filter the report by passed options first
    const errors = report.errors.filter((result: CodeInspectionResult) => {
      if (options === true) { return true; }
      if (options === false) { return false; }
      if (result.type === 'problem_type_error' && (<GutterOptions> options).error !== true) {
        return false;
      }
      if (result.type === 'problem_type_warning' && (<GutterOptions> options).warning !== true) {
        return false;
      }
      if (result.type === 'problem_type_meta' && (<GutterOptions> options).meta !== true) {
        return false;
      }
      return true;
    });

    // save the filtered errors to the markers
    markers[fullPath] = markers[fullPath] || {};
    markers[fullPath][sourceId] = errors;

    // get a list of editors, which need to be refreshed
    const editors = _.compact(_.map(MainViewManager.getPaneIdList(), function (paneId) {
      const currentPath = MainViewManager.getCurrentlyViewedPath(paneId);
      const doc = currentPath && DocumentManager.getOpenDocumentForPath(currentPath);
      return doc && doc._masterEditor;
    }));

    // we create empty gutters in all of these editors, all other editors lose their gutters
    prepareGutters(editors);

    const activeEditor = EditorManager.getActiveEditor();
    if (activeEditor.document === DocumentManager.getOpenDocumentForPath(fullPath)) {
      showGutters(activeEditor, fullPath);
    }

  }

  module.exports = function init() {
    const w = (<any> window);
    if (w.bracketsInspectionGutters) { return; }
    w.bracketsInspectionGutters = { set };
  };

});
