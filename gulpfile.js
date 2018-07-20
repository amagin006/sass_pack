var gulp = require('gulp');
var sass = require('gulp-sass');
var connect = require('gulp-connect');
var plumber = require('gulp-plumber');
var notify  = require('gulp-notify');
var gcmq = require('gulp-group-css-media-queries');


gulp.task('sass', function(){
  return gulp.src('./sass/*.scss')
    .pipe(plumber({
    errorHandler: notify.onError("Error: <%= error.message %>") //<-
     }))
    .pipe(sass({outputStyle: 'expanded'}))
    .pipe(gcmq())
    .pipe(gulp.dest('./'))
    .pipe(connect.reload())
});
gulp.task('watch', function(){
  gulp.watch('./sass/*.scss', ['sass']);
  gulp.watch('./*.html', ['watch']);
});

gulp.task('serve', function(){
  connect.server({
  livereload: true
  });
});

gulp.task('default', ['sass', 'watch', 'serve']);