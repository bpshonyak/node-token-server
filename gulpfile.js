/**
 * Created by bogdan on 5/6/16.
 */
var gulp = require('gulp');
var mocha = require('gulp-mocha');

gulp.task('pre-commit', ['unit']);

gulp.task('unit', function() {
  return gulp.src('./test/test-api.js', {read: false})
      // gulp-mocha needs filepaths so you can't have any plugins before it
      .pipe(mocha({reporter: 'nyan'}))
      .once('end', function () {
        process.exit();
      });
});
