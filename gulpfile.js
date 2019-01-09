var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');

// Compile SASS files into CSS
gulp.task('sass', function () {
    return gulp.src('public/sass/styles.sass')
        .pipe(sass({ includePaths: ['public/sass'] }))
        .pipe(gulp.dest('public/css'));
});

gulp.task('browserSync', function () {
    browserSync.init(["app/css/*.css"], {
        server: {
            baseDir: "public"
        }
    });
});

gulp.task('default', ['sass', 'browserSync'], function () {
    gulp.watch("public/sass/*.sass", ['sass']);
    gulp.watch("public/*.html", browserSync.reload);
});