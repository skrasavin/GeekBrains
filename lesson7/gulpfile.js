var gulp = require('gulp');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var browserSync = require('browser-sync');

gulp.task('browserSync', function () {
    browserSync({
        server: {
            baseDir: 'src',
        }
    })
});

gulp.task('scss', function () {
    return gulp.src('src/scss/style.sass')
        .pipe(sass())
        .pipe(gulp.dest('src/css'))
        .pipe(browserSync.reload({ stream: true }))
});

gulp.task('uglify', function () {
    return gulp.src('gulpfile.js')
        .pipe(uglify())
        .pipe(gulp.dest('src/min'))
})

gulp.task('watch', ['browserSync'],function () {
    gulp.watch('src/scss/style.sass', ['scss']);
    gulp.watch('gulpfile.js', ['uglify']);
    gulp.watch('src/index.html', browserSync.reload());
});
