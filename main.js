/*global $, brackets, console, define, setTimeout*/

define(function (require, exports, module) {
    "use strict";

    // imports
    var _               = brackets.getModule("thirdparty/lodash");
    var CodeInspection  = brackets.getModule("language/CodeInspection");
    var ExtensionUtils  = brackets.getModule("utils/ExtensionUtils");
    var LanguageManager = brackets.getModule("language/LanguageManager");
    var NodeDomain      = brackets.getModule("utils/NodeDomain");
    var StateManager    = require("./StateManager");

    // constants
    var EXTENSION_DIR   = ExtensionUtils.getModulePath(module);
    var JS_LANGUAGE     = LanguageManager.getLanguageForExtension("js");
    var LINTER_NAME     = "ESLint";
    var PACKAGE_JSON    = JSON.parse(require("text!./package.json"));

    // register jsx and es6 as javascript file extensions in Brackets
    ["es6", "jsx"].forEach(function (ext) {
        if (!LanguageManager.getLanguageForExtension(ext)) { JS_LANGUAGE.addFileExtension(ext); }
    });

    // setup a domain and install dependencies on startup
    var nodeDomain = new NodeDomain("brackets-eslint", ExtensionUtils.getModulePath(module, "node/domain"));
    // TODO: use which to resolve path to npm
    nodeDomain.exec("executeAsync", EXTENSION_DIR, "c:/Program Files/nodejs/npm", ["install", "eslint"]).then(function (stdout) {
        console.log("domain - ok");
        console.log(stdout);
    }, function (stderr) {
        console.log("domain - err");
        console.log(stderr);
    });

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
