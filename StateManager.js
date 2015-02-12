/*global brackets, define*/

define(function (require, exports, module) {
    "use strict";

    var ExtensionInfo      = JSON.parse(require("text!./package.json"));
    var PreferencesManager = brackets.getModule("preferences/PreferencesManager");
    var StateManager       = PreferencesManager.stateManager;
    var prefix             = ExtensionInfo.name;

    module.exports = {
        get: function (key) {
            return StateManager.get(prefix + "." + key);
        },
        set: function (key, value) {
            return StateManager.set(prefix + "." + key, value);
        }
    };

});
