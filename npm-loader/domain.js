/*global require, exports*/

(function () {
    "use strict";

    var ChildProcess  = require("child_process"),
        which         = require("./which"),
        domainName    = "zaggino.npm-loader-v1",
        domainManager = null;

    function fixEOL(str) {
        if (str[str.length - 1] === "\n") {
            str = str.slice(0, -1);
        }
        return str;
    }

    function executeAsync(directory, command, args, callback) {
        // use which to resolve a path executable
        command = which.sync(command);
        // execute commands have to be escaped, spawn does this automatically and will fail if cmd is escaped
        if (command[0] !== "\"" || command[command.length - 1] !== "\"") {
            command = "\"" + command + "\"";
        }
        // http://nodejs.org/api/child_process.html#child_process_child_process_exec_command_options_callback
        var toExec = command + " " + args.join(" ");
        var child = ChildProcess.exec(toExec, {
            cwd: directory,
            maxBuffer: 20*1024*1024
        }, function (err, stdout, stderr) {
            callback(err ? fixEOL(stderr) : undefined, err ? undefined : fixEOL(stdout));
        });
    }

    exports.init = function (_domainManager) {
        domainManager = _domainManager;

        if (!domainManager.hasDomain(domainName)) {
            domainManager.registerDomain(domainName, { major: 0, minor: 1 });
        }

        domainManager.registerCommand(
            domainName,
            "executeAsync", // command name
            executeAsync, // handler function
            true, // is async
            "executeAsync", // description
            [
                { name: "directory", type: "string" },
                { name: "command", type: "string" },
                { name: "args", type: "array" }
            ],
            [
                { name: "stdout", type: "string" }
            ]
        );

    };

}());
