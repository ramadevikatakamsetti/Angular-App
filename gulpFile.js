const jshint = require('gulp-jshint');
const gulp   = require('gulp');
 
gulp.task('default', function() {
  return gulp.src('./*/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('YOUR_REPORTER_HERE'));
});