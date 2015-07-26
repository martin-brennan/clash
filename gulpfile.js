var gulp  = require('gulp');
var babel = require('gulp-babel');
var sass  = require('gulp-sass');
var exec  = require('child_process').exec;

gulp.task('scripts', function () {
    return gulp.src('src/**/*.js')
        .pipe(babel())
        .pipe(gulp.dest('dist'));
});

gulp.task('sass', function () {
  return gulp.src('src/**/*.scss')
             .pipe(sass())
             .pipe(gulp.dest('dist'));
});

gulp.task('watch', function () {
  return gulp.watch('src/**/*.js', ['scripts']);
});

gulp.task('electron', function () {
  exec('electron .', function (error, stdout, stderr) {
    console.log('stdout: ' + stdout);
    console.log('stderr: ' + stderr);
    if (error !== null) {
      console.log('exec error: ' + error);
    }
  });
})

gulp.task('default', ['scripts', 'sass', 'watch']);
