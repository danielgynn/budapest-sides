const gulp = require('gulp');
var imageop = require('gulp-image-optimization');

gulp.task('default', function(cb) {
    gulp.src(['assets/images/*']).pipe(imageop({
        optimizationLevel: 5,
        progressive: true,
        interlaced: true
    })).pipe(gulp.dest('assets/images')).on('end', cb).on('error', cb);
});
