var browserify = require('browserify');
var connect = require('gulp-connect');
var gulp = require('gulp');
var path = require('path');
var rename = require('gulp-rename');
var source = require('vinyl-source-stream');
var stylus = require('gulp-stylus');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var deploy = require('gulp-gh-pages');

var PATH = {
  src: __dirname + '/src',
  main: 'element.js',
  stylus: 'element.styl',
  srcFiles: './src/**/*',
  dist: './dist',
  distFileJS: 'brick-element.js',
  distFileCSS: 'brick-element.css'
};

gulp.task('build', ['browserify', 'stylus', 'compress']);

gulp.task('server', ['build', 'connect', 'watch']);

gulp.task('watch', ['build'], function () {
  gulp.watch(PATH.srcFiles, ['build']);
});

gulp.task('browserify', function () {
  browserify({debug: false})
    .add(path.join(PATH.src, PATH.main))
    .bundle()
    .pipe(source(PATH.distFileJS))
    .pipe(gulp.dest(PATH.dist));
});

gulp.task('stylus', function () {
  gulp.src(path.join(PATH.src, PATH.stylus))
    .pipe(stylus())
    .pipe(concat(PATH.distFileCSS))
    .pipe(gulp.dest(PATH.dist));
});

gulp.task('compress', ['browserify'], function () {
  gulp.src(path.join(PATH.dist, PATH.distFileJS))
    .pipe(uglify())
    .pipe(rename(function (file) {
      file.basename += '-min';
    }))
    .pipe(gulp.dest(PATH.dist));
});

gulp.task('connect', function() {
  connect.server({ port: 3001 });
});

gulp.task('deploy', function () {
  gulp.src(PATH.dist + '/**/*')
    .pipe(deploy({}));
});
