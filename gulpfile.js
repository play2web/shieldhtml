/*
This file in the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/

/* ---------------------------------------------
*    Load dependecies
*  ---------------------------------------------
*/
var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin');
var notify = require('gulp-notify');

/// Minify HTML
/// https://github.com/jonschlinkert/gulp-htmlmin
gulp.task('minify-html', function () {
    return gulp.src('./src/index.html')
      .pipe(htmlmin({ collapseWhitespace: true }))
      .pipe(gulp.dest('./src/'))
      .pipe(notify('HTML Minified'));
});

/* 2.0
*  Error Handling
*  Click here to learn more. https://www.npmjs.com/package/gulp-plumber
*  Will prevent Gulp breaking caused by errors.
*/
var onError = function (err) {
    console.log('An error occurred:', gutil.colors.magenta(err.message));
    gutil.beep();
    this.emit('end');
};