var gulp = require('gulp'),
	connect = require('gulp-connect'),
	livereload = require('gulp-livereload'),
	sass = require('gulp-sass'),
	csso = require('gulp-csso'),
	includer = require('gulp-htmlincluder'),
	htmlmin = require('gulp-htmlmin'),
	sourcemaps = require('gulp-sourcemaps');

gulp.task('server', function(){
	connect.server({
		root: 'build/',
		livereload: true
	});
});

gulp.task('html', function(){
	gulp.src('dev/html/**/*.html')
		.pipe(includer())
		.pipe(htmlmin({
			collapseWhitespace: true
		}))
		.pipe(gulp.dest('build/'))
		.pipe(connect.reload());
});

gulp.task('sass', function(){
	gulp.src('dev/sass/**/*.scss')
		.pipe(sourcemaps.init())
		.pipe(sass().on('error', sass.logError))
		.pipe(csso({
			sourceMap: true,
            debug: true
		}))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('build/css/'))
		.pipe(connect.reload());
});

gulp.task('move', function(){
	gulp.src('dev/fonts/**/*.*').pipe(gulp.dest('build/fonts/'));
	gulp.src('dev/images/**/*.*').pipe(gulp.dest('build/images/'));
	gulp.src('dev/js/**/*.js').pipe(gulp.dest('build/js/'));
	connect.reload();
});

gulp.task('default', function(){
	gulp.start('server', 'html', 'sass', 'move');

	gulp.watch(['dev/html/**/**/*.html'], ['html']);
	gulp.watch(['dev/sass/**/**/*.scss'], ['sass']);
	gulp.watch(['dev/sass/**/**/*.scss'], ['sass']);
	gulp.watch(['dev/fonts/**/*.*', 'dev/images/**/*.*', 'dev/js/**/*.js' ], ['move']);
});