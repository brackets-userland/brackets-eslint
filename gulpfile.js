/*eslint strict: [2, "global"]*/

'use strict';

var fs = require('fs');
var path = require('path');
var gulp = require('gulp');
var gutil = require('gulp-util');
var eslint = require('gulp-eslint');
var through = require('through2');
var MAIN_FILES = './*.js';

// provides pipe to log stuff to console when certain task finishes
function logPipe(str) {
  return through.obj(function (file, enc, cb) {
    cb();
  }, function (cb) {
    gutil.log(str);
    cb();
  });
}

// helper for linting files
function doEslint(globs, singleFile) {
  if (singleFile) {
    gutil.log(gutil.colors.magenta('Start ESLint ' + globs[0]));
  }

  var task = gulp.src(globs)
    .pipe(eslint())
    .pipe(eslint.format());

  return singleFile ?
    task.pipe(logPipe(gutil.colors.magenta('Finish ESLint ' + globs[0]))) :
    task.pipe(eslint.failAfterError());
}

gulp.task('eslint', function () {
  return doEslint([MAIN_FILES], false);
});

gulp.task('watch', function () {
  gulp.watch([MAIN_FILES]).on('change', function (event) {
    var filePath = path.relative(__dirname, event.path);
    if (fs.statSync(filePath).isFile()) {
      doEslint([filePath], true);
    }
  });
});

gulp.task('test', ['eslint']);
gulp.task('default', ['test']);
