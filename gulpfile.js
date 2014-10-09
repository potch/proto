var browserify = require('browserify');
var gulp = require('gulp');
var templates = require('hbsify');
var path = require('path');
var rename = require('gulp-rename');
var source = require('vinyl-source-stream');
var stylus = require('gulp-stylus');
var through = require('through');
var uglify = require('gulp-uglify');

var PATH = {
  src: 'src',
  main: 'element.js',
  stylus: 'element.styl',
  srcFiles: 'src/**/*',
  dist: 'dist',
  distFile: 'brick-header.js'
};

gulp.task('build', ['browserify', 'stylus']);

gulp.task('browserify', function () {
  browserify({basedir: PATH.src, debug: true})
    .add(path.join(PATH.src, PATH.main))
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

gulp.task('stylus', function () {
  gulp.src(path.join(PATH.src,PATH.stylus))
    .pipe(stylus())
    .pipe(rename(function (file) {
      file.extname = '.css';
    }))
    .pipe(gulp.dest(PATH.dist));
});

gulp.task('watch', function () {
  gulp.watch(PATH.srcFiles, ['build']);
});
