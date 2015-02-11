/*global $, brackets, define, setTimeout*/

define(function (require) {
    "use strict";

    var LINTER_NAME     = "ESLint";
    var CodeInspection  = brackets.getModule("language/CodeInspection");
    var FileUtils       = brackets.getModule("file/FileUtils");
    var ESLint          = require("./eslint");

    function remapResults(results) {
        return {
            errors: results.map(function (result) {
                return {
                    message: result.message,
                    pos: {
                        line: result.line,
                        ch: result.column
                    },
                    type: result.ruleId
                };                
            })
        };
    }
    
    function handleLintSync(text, fullPath) {        
        var options = ESLint.defaults();
        var filename = FileUtils.getBaseName(fullPath);
        var results = ESLint.verify(text, options, filename);        
        return remapResults(results);
    }
    
    function handleLintAsync(text, fullPath) {
        var deferred = new $.Deferred();        
        
        setTimeout(function () {
            deferred.resolve(handleLintSync(text, fullPath));
        }, 1);        
        
        return deferred.promise();
    }
    
    CodeInspection.register("javascript", {
        name: LINTER_NAME,
        scanFile: handleLintSync,
        scanFileAsync: handleLintAsync
    });

});
