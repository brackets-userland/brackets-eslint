/*global $, brackets, define*/

define(function (require, exports, module) {
    "use strict";

    var ExtensionUtils  = brackets.getModule("utils/ExtensionUtils");
    var NodeDomain = brackets.getModule("utils/NodeDomain");
    var nodeDomain = new NodeDomain("zaggino.npm-loader", ExtensionUtils.getModulePath(module, "domain"));

    function NpmLoader(options) {
        this.options = options || {};
    }

    NpmLoader.prototype.load = function (npmModuleName) {
        var deferred = $.Deferred();

        // setup a domain and install dependencies on startup
        nodeDomain.exec("executeAsync", this.options.cwd, "npm", ["install", npmModuleName])
            .then(function (stdout) {
                try {
                    var version = stdout.match(/^\S+/)[0].split("@")[1];
                    deferred.resolve(version);
                } catch (e) {
                    deferred.resolve(stdout);
                }
            }, function (stderr) {
                deferred.reject(stderr);
            });

        return deferred.promise();
    };

    module.exports = NpmLoader;

});
