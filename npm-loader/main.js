/*global $, brackets, console, define*/

define(function (require, exports, module) {
    "use strict";

    var FileUtils       = brackets.getModule("file/FileUtils");
    var ExtensionUtils  = brackets.getModule("utils/ExtensionUtils");
    var NodeDomain      = brackets.getModule("utils/NodeDomain");
    var nodeDomain      = new NodeDomain("zaggino.npm-loader-v1", ExtensionUtils.getModulePath(module, "domain"));

    function NpmLoader(options) {
        this.options = options || {};
    }

    NpmLoader.prototype.install = function (npmModuleName) {
        var deferred = $.Deferred();
        var cwd = this.options.cwd || ExtensionUtils.getModulePath(module);

        // setup a domain and install dependencies on startup
        nodeDomain.exec("executeAsync", cwd, "npm", ["--loglevel", "warn", "install", npmModuleName])
            .then(function (stdout) {
                try {
                    var m = stdout.match(/^(\S+)\s+(\S+)/);
                    var version = m[1].split("@")[1];
                    var installationPath = FileUtils.convertWindowsPathToUnixPath(m[2]);
                    console.log("NpmLoader: Installed module `" + npmModuleName + "` into: " + cwd + installationPath);
                    deferred.resolve(version);
                } catch (err) {
                    console.error("NpmLoader: Trouble parsing the install output: " + err);
                    deferred.resolve(stdout);
                }
            }, function (stderr) {
                console.error("NpmLoader: Failed to install `" + npmModuleName + "`: " + stderr);
                deferred.reject(stderr);
            });

        return deferred.promise();
    };

    NpmLoader.prototype.getLatestVersion = function (npmModuleName) {
        var deferred = $.Deferred();
        var cwd = this.options.cwd || ExtensionUtils.getModulePath(module);

        // setup a domain and install dependencies on startup
        nodeDomain.exec("executeAsync", cwd, "npm", ["--loglevel", "warn", "view", npmModuleName, "version"])
            .then(function (version) {
                deferred.resolve(version.trim());
            }, function (stderr) {
                deferred.reject(stderr);
            });

        return deferred.promise();
    };

    module.exports = NpmLoader;

});
