"use strict";

module.exports = function (grunt) {
    require("load-grunt-tasks")(grunt); // npm install --save-dev load-grunt-tasks

    grunt.initConfig({
        
        pkg: grunt.file.readJSON("package.json"),
        
        copy: {
            eslint: {
                files: [
                    {
                        expand: false,
                        flatten: true,
                        src: "eslint/build/eslint.js",
                        dest: "eslint.js",
                        filter: "isFile"
                    }
                ]
            },
            yaml: {
                files: [
                    {
                        expand: false,
                        flatten: true,
                        src: "js-yaml/dist/js-yaml.js",
                        dest: "js-yaml.js",
                        filter: "isFile"
                    }
                ]
            }
        },
        
        zip: {
            main: {
                dest: "<%= pkg.name %>.zip",
                src: [
                    "LICENSE",
                    "*.js",
                    "*.json"
                ]
            }
        },
        
        eslint: {
            options: {
                configFile: ".eslintrc"
            },
            target: ["main.js"]
        }
        
    });

    grunt.registerTask("copyyaml", ["copy:yaml"]);
    grunt.registerTask("copyeslint", ["copy:eslint"]);
    grunt.registerTask("package", ["test", "zip"]);
    grunt.registerTask("test", ["eslint"]);
    grunt.registerTask("default", ["test"]);
};
