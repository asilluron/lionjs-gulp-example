var gulp = require('gulp');
var lion = require('lionjs');
var fs = require('fs');
var connect = require('gulp-connect');

var paths = {
    models: 'models/**/*.json'
};

gulp.task('connect', function() {
  connect.server({
    root: 'examples',
    livereload: true
  });
});

gulp.task('source', function () {
  gulp.src('./examples/*.html')
    .pipe(connect.reload());
});

gulp.task('watch', function () {
  gulp.watch(['./examples/**/*'], ['source']);
});

gulp.task('default', ['connect', 'watch']);
