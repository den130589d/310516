var gulp = require('gulp');
var concatCss = require('gulp-concat-css');
var includer = require('gulp-htmlincluder');

gulp.task('missionOne', function(){
	gulp.src('dev/*.css').pipe(concatCss('style.css')).pipe(gulp.dest('build/css/'));

	
});
gulp.task('missionTwo', function(){
	gulp.src('dev/html/*.html').pipe(includer()).pipe(gulp.dest('build/'));

	
});


gulp.task('default', function(){
	gulp.start('missionOne', 'missionTwo');

	gulp.watch(['dev/**/*.css'], function(){
		gulp.start('missionOne');
	});
	gulp.watch(['dev/html/**/*.html'], function(){
		gulp.start('missionTwo');
	});
});