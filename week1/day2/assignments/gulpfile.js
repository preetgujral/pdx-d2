var gulp = require('gulp');
var jshint = require('gulp-jshint');
var mocha = require('gulp-mocha');

//task - jshint
gulp.task('lint', function(){
  return gulp.src('./*.js')
  .pipe(jshint())
  .pipe(jshint.reporter('default'));
});

//task - test
gulp.task('test', function(){
  return gulp.src('./test.js')
  .pipe(mocha({reporter: 'nyan'}));
});

//task - watch
gulp.task('watch', function(){
  gulp.watch('./*.js', ['lint', 'test']);
});

//run tasks
gulp.task('default', ['lint','test', 'watch']);
