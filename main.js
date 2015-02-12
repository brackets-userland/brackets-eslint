/*global $, brackets, console, define, setTimeout*/

define(function (require) {
    "use strict";

    var LINTER_NAME     = "ESLint";
    var _               = brackets.getModule("thirdparty/lodash");
    var CodeInspection  = brackets.getModule("language/CodeInspection");
    var FileSystem      = brackets.getModule("filesystem/FileSystem");
    var FileUtils       = brackets.getModule("file/FileUtils");
    var LanguageManager = brackets.getModule("language/LanguageManager");
    var ESLint          = require("./eslint");
    var YAML            = require("./js-yaml");
    var StateManager    = require("./StateManager");
    var ExtensionInfo   = JSON.parse(require("text!./package.json"));
    var CONFIG_CACHE    = {};
    var DEBUG           = StateManager.get("DEBUG");
    var CONFIG_FILENAME = ".eslintrc";
    var jsLanguage      = LanguageManager.getLanguageForExtension("js");

    // register jsx and es6 as javascript file extensions in Brackets
    ["es6", "jsx"].forEach(function (ext) {
        if (!LanguageManager.getLanguageForExtension(ext)) { jsLanguage.addFileExtension(ext); }
    });

    function log(str) {
        if (DEBUG) {
            console.log(ExtensionInfo.title + ": " + str);
        }
    }

    function loadConfigFile(fullPath) {
        var deferred = new $.Deferred();

        var finish = function () {
            deferred.resolve(CONFIG_CACHE[fullPath]);
        };

        FileSystem.resolve(fullPath, function (err1, entry) {

            if (err1 || !entry.isFile) {
                log((err1 || "not-a-file") + " - " + fullPath);
                CONFIG_CACHE[fullPath] = null;
                return finish();
            }

            entry.read(function (err2, content) {

                if (err2) {
                    log("error reading contents - " + fullPath);
                    CONFIG_CACHE[fullPath] = null;
                    return finish();
                }

                var config = null;

                try {
                    config = YAML.load(content);
                } catch (e1) {
                    log("cannot parse yaml - " + fullPath);
                    try {
                        config = JSON.parse(content);
                    } catch (e2) {
                        log("cannot parse json - " + fullPath);
                    }
                }

                if (config) {
                    log("file parsed successfully - " + fullPath);
                }

                CONFIG_CACHE[fullPath] = config;
                return finish();

            });

        });

        return deferred.promise();
    }

    // this will split the path and return paths to follow ESLint spec:
    // look for them in the directory of the file to be linted,
    // and in successive parent directories all the way up to the root directory of the filesystem
    function getConfigFilePathsFromPath(fullPath) {
        var paths = [];
        var parts = fullPath.split("/");

        // remove filename
        parts.pop();

        // now check all paths for a .eslintrc file
        while (parts.length > 0) {
            paths.push(parts.join("/") + "/" + CONFIG_FILENAME);
            parts.pop();
        }

        return paths;
    }

    // method expects all config files to be already cached
    function getConfigForPathSync(fullPath) {
        var paths = getConfigFilePathsFromPath(fullPath);
        var defaultConfig = ESLint.defaults();

        var configs = _.compact(paths.map(function (path) {
            if (path in CONFIG_CACHE) {
                return CONFIG_CACHE[path];
            } else {
                // path is not in cache so we should launch a cache refresh for this path
                loadConfigFile(path);
                return null;
            }
        })).concat([defaultConfig]);

        // this requires a two level defaults merge
        var result = {};
        Object.keys(defaultConfig).forEach(function (key) {
            result[key] = _.defaults.apply(null, _.compact(configs.map(function (config) {
                return config[key] || null;
            })));
        });
        return result;
    }

    // load all config files into cache and then resolve in a sync way
    function getConfigForPathAsync(fullPath) {
        var deferred = new $.Deferred();
        var paths = getConfigFilePathsFromPath(fullPath);

        // load all files in paths if required (not in cache)
        var promises = _.compact(paths.map(function (path) {
            if (path in CONFIG_CACHE) {
                return null;
            } else {
                return loadConfigFile(path);
            }
        }));

        if (promises.length === 0) {
            deferred.resolve(getConfigForPathSync(fullPath));
        } else {
            var finish = _.after(promises.length, function () {
                deferred.resolve(getConfigForPathSync(fullPath));
            });
            promises.forEach(function (p) {
                p.always(function () {
                    finish();
                });
            });
        }

        return deferred.promise();
    }

    // this will map ESLint output to match format expected by Brackets
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
    CodeInspection.register(jsLanguage.getId(), {
        name: LINTER_NAME,
        scanFile: handleLintSync,
        scanFileAsync: handleLintAsync
    });

    // watch for changes on config files and update the cache accordingly
    FileSystem.on("change", function (evt, entry) {
        if (entry.isFile && entry.name === CONFIG_FILENAME) {
            loadConfigFile(entry.fullPath);
        }
    });

    // some helper methods to switch debug on/off through console
    window[ExtensionInfo.name] = {
        debug: function (bool) {
            bool = !!bool;
            StateManager.set("DEBUG", bool);
            DEBUG = bool;
            console.log(ExtensionInfo.title + ": DEBUG set to: " + bool);
        }
    };

});
