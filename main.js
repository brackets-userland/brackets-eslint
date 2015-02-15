/*global $, brackets, console, define, setTimeout*/

define(function (require, exports, module) {
    "use strict";

    // imports
    var _               = brackets.getModule("thirdparty/lodash");
    var CodeInspection  = brackets.getModule("language/CodeInspection");
    var ExtensionUtils  = brackets.getModule("utils/ExtensionUtils");
    var LanguageManager = brackets.getModule("language/LanguageManager");
    var StateManager    = require("./StateManager");
    var NpmLoader       = require("./npm-loader/main");

    // constants
    var EXTENSION_DIR   = ExtensionUtils.getModulePath(module);
    var JS_LANGUAGE     = LanguageManager.getLanguageForExtension("js");
    var LINTER_NAME     = "ESLint";
    var PACKAGE_JSON    = JSON.parse(require("text!./package.json"));

    // register jsx and es6 as javascript file extensions in Brackets
    ["es6", "jsx"].forEach(function (ext) {
        if (!LanguageManager.getLanguageForExtension(ext)) { JS_LANGUAGE.addFileExtension(ext); }
    });
    
    /*
    // require("browserified/eslint-0.14.1");

    function initLinter() {
        console.log("TODO");
    }

    function installESlint() {
        loader.install("eslint").then(function (version) {
            StateManager.set("currentEslintVersion", version);
            initLinter();
        }, function (err) {
            StateManager.set("currentEslintVersion", null);
        });
    }

    // install npm packages on startup using NpmLoader
    var loader = new NpmLoader({
        cwd: EXTENSION_DIR
    });

    var currentExtensionVersion = PACKAGE_JSON.version;
    var lastExtensionVersion = StateManager.get("lastExtensionVersion");
    if (currentExtensionVersion !== lastExtensionVersion) {
        StateManager.set("lastExtensionVersion", currentExtensionVersion);
        console.log("ESLint needs to be reinstalled because of extension version change.");
        installESlint();
    } else {
        var currentEslintVersion = StateManager.get("currentEslintVersion");
        loader.getLatestVersion("eslint").then(function (latestEslintVersion) {
            if (currentEslintVersion !== latestEslintVersion) {
                console.log("ESLint needs to be updated to version " + latestEslintVersion);
                installESlint();
            } else {
                console.log("ESLint is up to date (" + latestEslintVersion + ")");
                initLinter();
            }
        }, function (err) {
            console.error("ESLint failed checking for latest version: " + err);
            initLinter();
        });
    }
    */

    // this will map ESLint output to match format expected by Brackets
    /*
    function remapResults(results) {
        return {
            errors: results.map(function (result) {
                var message = result.message;
                if (result.ruleId) { message += " [" + result.ruleId + "]"; }
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

    function doLint(text, fullPath, config) {
        config = config || ESLint.defaults();
        var filename = FileUtils.getBaseName(fullPath);
        var results = ESLint.verify(text, config, filename);
        return remapResults(results);
    }

    function handleLintSync(text, fullPath) {
        return doLint(text, fullPath, getConfigForPathSync(fullPath));
    }

    function handleLintAsync(text, fullPath) {
        return getConfigForPathAsync(fullPath)
            .then(function (config) {
                return doLint(text, fullPath, config);
            });
    }

    // register a linter with CodeInspection
    CodeInspection.register(JS_LANGUAGE.getId(), {
        name: LINTER_NAME,
        scanFile: handleLintSync,
        scanFileAsync: handleLintAsync
    });
    */

});
