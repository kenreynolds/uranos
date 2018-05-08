var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');

// Compile SASS files into CSS
gulp.task('sass', function () {
    return gulp.src('app/sass/styles.sass')
        .pipe(sass({ includePaths: ['app/sass'] }))
        .pipe(gulp.dest('app/css'));
});

gulp.task('browserSync', function () {
    browserSync.init(["app/css/*.css"], {
        server: {
            baseDir: "app"
        }
    });
});

gulp.task('default', ['sass', 'browserSync'], function () {
    gulp.watch("app/sass/*.sass", ['sass']);
    gulp.watch("app/*.html", browserSync.reload);
});