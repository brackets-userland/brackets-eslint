/* global $, brackets, define */
define(function () {
  'use strict';

    // Brackets modules
  var _ = brackets.getModule('thirdparty/lodash');
  var DocumentManager = brackets.getModule('document/DocumentManager');
  var MainViewManager = brackets.getModule('view/MainViewManager');
  var EditorManager = brackets.getModule('editor/EditorManager');

  var cmLineNumberGutter = 'CodeMirror-linenumbers';
  var gutterName = 'brackets-eslint-gutter';
  var gutterMarkerName = 'brackets-eslint-gutter-marker';
  var editorsWithGutters = [];
  var eslintMarkers = [];

  var cssWarningClass = 'eslint-warning';
  var cssErrorClass = 'eslint-error';

  var showGutterWarning = true;
  var showGutterError = true;

  function clearOld(editor) {
    var cm = editor._codeMirror;
    if (!cm) {
      return;
    }

    var gutters = cm.getOption('gutters').slice(0);
    var io = gutters.indexOf(gutterName);

    if (io !== -1) {
      gutters.splice(io, 1);
      cm.clearGutter(gutterName);
      cm.setOption('gutters', gutters);
    }

    delete cm.eslintGutters;
  }

  function prepareGutter(editor) {
    // add our gutter if its not already available
    var cm = editor._codeMirror;

    var gutters = cm.getOption('gutters').slice(0);
    if (gutters.indexOf(gutterName) === -1) {
      // add the gutter just before the linenumbers if possible
      var cmLineNumberIdx = gutters.indexOf(cmLineNumberGutter);
      cmLineNumberIdx = cmLineNumberIdx === -1 ? 0 : cmLineNumberIdx;

      gutters.splice(cmLineNumberIdx, 0, gutterName);
      cm.setOption('gutters', gutters);
    }

    if (editorsWithGutters.indexOf(editor) === -1) {
      editorsWithGutters.push(editor);
    }
  }

  function prepareGutters(editors) {
    editors.forEach(function (editor) {
      prepareGutter(editor);
    });
      // clear the rest
    var idx = editorsWithGutters.length;
    while (idx--) {
      if (editors.indexOf(editorsWithGutters[idx]) === -1) {
        clearOld(editorsWithGutters[idx]);
        editorsWithGutters.splice(idx, 1);
      }
    }
  }

  function showGutters(editor, _results) {
    prepareGutter(editor);

    var cm = editor._codeMirror;

    _results = _results.filter(function (obj) {
      var severity = obj.severity;
      if (!obj.line) {
        return false;
      }
      if (!showGutterError && severity === 2) {
        return false;
      }
      if (!showGutterWarning && severity === 1) {
        return false;
      }
      return true;
    });

    // sortBy severity and line number
    cm.eslintGutters = _.sortBy(_results, function (obj) {
      return [obj.severity, obj.line];
    });

    cm.clearGutter(gutterName);

    cm.eslintGutters.forEach(function (obj) {
      var severity = obj.severity === 2 ? cssErrorClass : cssWarningClass;
      var $marker = $('<div><span>')
                        .addClass(gutterMarkerName);
      $marker.find('span')
        .addClass(severity)
        .html('&nbsp;');
      cm.setGutterMarker(obj.line - 1, gutterName, $marker[0]);
    });
  }

  function getEditorFromPane(paneId) {
    var currentPath = MainViewManager.getCurrentlyViewedPath(paneId);
    var doc = currentPath && DocumentManager.getOpenDocumentForPath(currentPath);
    return doc && doc._masterEditor;
  }

  function refresh(fullPath) {
    // we get a list of editors, which need to be refreshed
    var editors = _.compact(_.map(MainViewManager.getPaneIdList(), function (paneId) {
      return getEditorFromPane(paneId);
    }));

    // we create empty gutters in all of these editors, all other editors lose their gutters
    prepareGutters(editors);

    var activeEditor = EditorManager.getActiveEditor();
    if (activeEditor.document === DocumentManager.getOpenDocumentForPath(fullPath)) {
      showGutters(activeEditor, eslintMarkers);
    }
  }

  function GutterManager() {

    function setGutterMarkers(markers, option) {
      if (option && option.error != null) {
        showGutterError = option.error === true;
      }
      if (option && option.warning != null) {
        showGutterWarning = option.warning === true;
      }
      if (markers && markers.length) {
        eslintMarkers = markers;
      } else {
        eslintMarkers.length = 0;
      }
    }

    return {
      refresh: refresh,
      setGutterMarkers: setGutterMarkers
    };
  }

  return GutterManager;
});
