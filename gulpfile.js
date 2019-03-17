const babel = require('gulp-babel');
const del = require('del');
const gulp = require('gulp');
const watch = require('gulp-watch');
const uglify = require('gulp-uglify');
const uglifycss = require('gulp-uglifycss');
const browserSync = require('browser-sync');
const sass = require('gulp-sass');
//const handlebars = require('gulp-compile-handlebars');
//const rename = require('gulp-rename');
const server = browserSync.create();

const paths = {
	scripts: {
		js_main: './js/main.js',
		js_partials: './js/partials/*',
		js_libs: './js/libs/*'
	},

	styles: {
		scss_main: './scss/main.scss',
		scss_partials: './scss/partials/*',
	},

	img: {
		img_main: './img/**/*',
	},

	templates: {
		html: './templates/*'
	},

	expo: {
		docs_css: 'docs/css/',
		docs_js: 'docs/js/',
		docs_js_libs: 'docs/js/libs/',
		docs_img: 'docs/img/',
		docs: 'docs/',
	},
};


/**
 *
 *
 * Overall Tasks
 *
 * **/



const cleanDocs = () => del(['docs']);



/**
 *
 *
 * Default and Build Tasks
 *
 * **/


function buildDirectory() {
	return gulp.src('*.*', {read: false})
		.pipe(gulp.dest('./docs/css'))
		.pipe(gulp.dest('./docs/js'))
		.pipe(gulp.dest('./docs/js/libs'))
		.pipe(gulp.dest('./docs/img'));
}

function copyHtmlDocs() {
	return gulp.src(paths.templates.html, { sourcemaps: true })
		.pipe(gulp.dest(paths.expo.docs));
}

function copyJsLibs() {
	return gulp.src(paths.scripts.js_libs, { sourcemaps: true })
		.pipe(gulp.dest(paths.expo.docs_js_libs));
}

// HBS einbindung muss noch erfolgen
//gulp.src('templates/*.hbs')
//.pipe(hbsAll('html', {
//context: {foo: 'bar'},

// partials: ['templates/partials/**/*.hbs'],}))
//.pipe(rename('index.html'))
//.pipe(htmlmin({collapseWhitespace: true}))
//.pipe(gulp.dest(''));



function copyJs() {
	return gulp.src(paths.scripts.js_main, "./js/libs/*", { sourcemaps: true })
		.pipe(babel({
			presets: ['@babel/env']
		}))
		.pipe(uglify())
		.pipe(gulp.dest(paths.expo.docs_js));
}

function copyCss() {
	return gulp.src(paths.styles.scss_main, { sourcemaps: true })
		.pipe(sass())
		.pipe(uglifycss({
			//"maxLineLen": 80,
			"uglyComments": true
		}))
		.pipe(gulp.dest(paths.expo.docs_css));
}

function copyImgDocs() {
	return gulp.src(paths.img.img_main, { sourcemaps: true })
		.pipe(gulp.dest(paths.expo.docs_img));
}

function reload(done) {
    server.reload();
    done();
}

function serve(done) {
    server.init({
        server: {
            baseDir: './docs/'
        }
    });
    done();
}

const watcher = () => {
	gulp.watch('js/*', gulp.series(copyJs, reload));
	gulp.watch('js/main.js', gulp.series(copyJs, reload));
	gulp.watch('js/partials/*.js', gulp.series(copyJs, reload));
	gulp.watch('scss/*', gulp.series(copyCss, reload));
	gulp.watch('scss/main.scss', gulp.series(copyCss, reload));
	gulp.watch('scss/partials/*.scss', gulp.series(copyCss, reload));
	gulp.watch('templates/*.html', gulp.series(copyHtmlDocs, reload));
};

/**
 *
 *
 * Start Tasks
 *
 * **/

gulp.task('default', gulp.series(cleanDocs, copyHtmlDocs, buildDirectory, copyJs, copyJsLibs, copyCss, copyImgDocs, serve, watcher),);


gulp.task('build', gulp.series(cleanDocs, copyHtmlDocs, buildDirectory, copyJs, copyCss, copyImgDocs),);


gulp.task('deleteAll', gulp.series(cleanDocs),);



