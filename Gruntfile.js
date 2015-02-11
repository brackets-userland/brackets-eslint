"use strict";

module.exports = function (grunt) {
    require("load-grunt-tasks")(grunt); // npm install --save-dev load-grunt-tasks

    grunt.initConfig({
        
        pkg: grunt.file.readJSON("package.json"),
        
        copy: {
            eslint: {
                files: [
                    {
                        expand: true,
                        flatten: true,
                        src: 'eslint/build/eslint.js',
                        dest: '',
                        filter: 'isFile'
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
                configFile: '.eslintrc'
            },
            target: ['main.js']
        }
        
    });

    grunt.registerTask("copyeslint", ["copy:eslint"]);
    grunt.registerTask("package", ["test", "zip"]);
    grunt.registerTask("test", ["eslint"]);
    grunt.registerTask("default", ["test"]);
};