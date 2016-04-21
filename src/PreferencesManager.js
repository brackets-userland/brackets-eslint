/* global brackets, define */
define(function () {
  'use strict';

  // Brackets modules
  var PreferencesManager = brackets.getModule('preferences/PreferencesManager');
  var _preferences;

  function loadPreferences(preferencesId) {
    return PreferencesManager.getExtensionPrefs(preferencesId);
  }

  function loadDefaultPreferences() {
    _preferences.definePreference('gutter', 'boolean', true);
  }

  function PrefsManager(prefId) {
    _preferences = loadPreferences(prefId);
    loadDefaultPreferences();
    return {
      gutter: _preferences.get('gutter')
    };
  }

  return PrefsManager;
});
