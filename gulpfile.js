var gulp      = require('gulp'),
    component = require('gulp-component')

gulp.task('default', function () {
    gulp.src('component.json')
        .pipe(component({
            standalone: true
        }))
        .pipe(gulp.dest('build'))
})

gulp.task('watch', function () {
    gulp.watch(['component.json', 'src/**/*'], ['default'])
})
