var gulp = require('gulp');
var gutil = require('gulp-util');
var source = require('vinyl-source-stream');
var watchify = require('watchify');
var es6ify = require("es6ify");
var jadeify = require("jadeify");

gulp.task("style", function () {
  gulp.src("node_modules/ionic/release/css/ionic.css")
    .pipe(gulp.dest("www/style"));

  gulp.src("node_modules/ionic/release/fonts/*")
    .pipe(gulp.dest("www/fonts"));
});

gulp.task('watch', function () {
  var bundler = watchify('./app/js/app.js')
    .transform(es6ify)
    .transform(jadeify)
    .on('update', rebundle)
    .on("log", gutil.log);

  function rebundle () {
    return bundler.bundle({ debug: true })
      .on('error', function (e) {
        gutil.log('Browserify Error', e);
      })
      .pipe(source('app.js'))
      .pipe(gulp.dest('www/js/'))
  }

  return rebundle()
});