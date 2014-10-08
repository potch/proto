var browserify = require('browserify');
var gulp = require('gulp');
var templates = require('hbsify');
var path = require('path');
var rename = require('gulp-rename');
var source = require('vinyl-source-stream');
var through = require('through');
var uglify = require('gulp-uglify');

var PATH = {
  main: './element.js',
  src: 'src',
  srcFiles: 'src/**/*',
  dist: 'dist',
  distFile: 'brick-header.js'
};

gulp.task('build', function () {
  browserify({basedir: PATH.src, debug: true})
    .add(PATH.main)
    .transform(templates)
    .bundle()
    .pipe(source(PATH.distFile))
    .pipe(gulp.dest(PATH.dist));
});

gulp.task('compress', function () {
  gulp.src(path.join(PATH.dist,PATH.distFile))
    .pipe(uglify())
    .pipe(rename(function (file) {
      file.basename += '-min';
    }))
    .pipe(gulp.dest(PATH.dist));
});

gulp.task('watch', function () {
  gulp.watch(PATH.srcFiles, ['build']);
});
