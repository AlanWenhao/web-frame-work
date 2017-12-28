const gulp = require('gulp');
const babel = require('gulp-babel');

gulp.task('default', ['node'], () => {
    gulp.watch(['src/**/*.js', '!src/public/**/*.js'], ['node']);
});

gulp.task('node', () =>
    gulp.src(['src/**/*.js', '!src/public/**/*.js'])
        .pipe(babel({
            presets: ['env'],
        }))
        .pipe(gulp.dest('dist')));
