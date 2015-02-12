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
    var CONFIG_CACHE    = {};
    var DEBUG           = true;
    var jsLanguage      = LanguageManager.getLanguageForExtension("js");

    // register jsx and es6 as javascript file extensions in Brackets
    ["es6", "jsx"].forEach(function (ext) {
        if (!LanguageManager.getLanguageForExtension(ext)) { jsLanguage.addFileExtension(ext); }
    });

    function log(str) {
        if (DEBUG) {
            console.log(str);
        }
    }

    function loadConfigFile(fullPath) {
        var deferred = new $.Deferred();

        var finish = function () {
            deferred.resolve(CONFIG_CACHE[fullPath]);
        };

        FileSystem.resolve(fullPath, function (err, entry) {

            if (err || !entry.isFile) {
                log("eslint: " + (err || "not-a-file") + " - " + fullPath);
                CONFIG_CACHE[fullPath] = null;
                return finish();
            }

            entry.read(function (err, content) {

                if (err) {
                    log("eslint: error reading contents - " + fullPath);
                    CONFIG_CACHE[fullPath] = null;
                    return finish();
                }

                var config = null;

                try {
                    config = YAML.load(content);
                } catch (e1) {
                    log("eslint: cannot parse yaml - " + fullPath);
                    try {
                        config = JSON.parse(content);
                    } catch (e2) {
                        log("eslint: cannot parse json - " + fullPath);
                    }
                }

                if (config) {
                    log("eslint: file parsed successfully - " + fullPath);
                }

                CONFIG_CACHE[fullPath] = config;
                return finish();

            });

        });

        return deferred.promise();
    }

    function getConfigFilePathsFromPath(fullPath) {
        var paths = [];
        var parts = fullPath.split("/");

        // remove filename
        parts.pop();

        // now check all paths for a .eslintrc file
        while (parts.length > 0) {
            paths.push(parts.join("/") + "/.eslintrc");
            parts.pop();
        }

        return paths;
    }

    function getConfigForPathSync(fullPath) {
        var paths = getConfigFilePathsFromPath(fullPath);
        var defaultConfig = ESLint.defaults();

        var configs = _.compact(paths.map(function (path) {
            return CONFIG_CACHE[path];
        })).concat([defaultConfig]);

        var result = {};
        Object.keys(defaultConfig).forEach(function (key) {
            result[key] = _.defaults.apply(null, configs.map(function (config) {
                return config[key] || {};
            }));
        });
        return result;
    }

    function getConfigForPath(fullPath) {
        var deferred = new $.Deferred();
        var paths = getConfigFilePathsFromPath(fullPath);

        // load all files in paths if required
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

    function remapResults(results) {
        return {
            errors: results.map(function (result) {
                return {
                    message: result.message + " [" + result.ruleId + "]",
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
        return getConfigForPath(fullPath)
            .then(function (config) {
                return doLint(text, fullPath, config);
            });
    }

    CodeInspection.register(jsLanguage.getId(), {
        name: LINTER_NAME,
        scanFile: handleLintSync,
        scanFileAsync: handleLintAsync
    });

    FileSystem.on("change", function (evt, entry) {
        if (entry.isFile && entry.name === ".eslintrc") {
            loadConfigFile(entry.fullPath);
        }
    });

});
