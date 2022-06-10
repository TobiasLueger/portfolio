'use strict';

const glob = require('glob');
const del = require('del');
const gulp = require('gulp');
const babel = require('gulp-babel');
const plumber = require('gulp-plumber');
const sourcemaps = require('gulp-sourcemaps');
const uglifycss = require('gulp-uglifycss');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass');
const handlebars = require('gulp-compile-handlebars');
const rename = require('gulp-rename');
const server = require('browser-sync').create();
const helpers = require('./templates/helpers/hbs-helpers');
const browserify = require('browserify');
const babelify = require('babelify');
const buffer = require('vinyl-buffer');
const source = require('vinyl-source-stream');


const paths = {
	scripts: {
		js_main: ['main.js'],
		js_folder: './js/',
		js_partials: './js/partials/*',
		js_libs: './js/libs/*',
		js_components: './components/**/*'
	},

	styles: {
		scss_main: './scss/main.scss',
		scss_partials: './scss/partials/*',
		scss_components: './components/**/*'
	},

	img: {
		img_main: './img/**/*',
	},

	templates: {
		html: './templates/*',
		php: './templates/php/*.php'
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



 
function cleanDocs(cb) {
	del(['docs']);
	cb();
}

// exports.clean = del.bind(null, ['docs', 'coverage', 'build', 'release']);



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

function copyPHP() {
	return gulp.src(paths.templates.php, { sourcemaps: true })
		.pipe(gulp.dest(paths.expo.docs));
}

function copyJsLibs() {
	return gulp.src(paths.scripts.js_libs, { sourcemaps: true })
		.pipe(gulp.dest(paths.expo.docs_js_libs));
}

const getDirectoriesFromGlob = (path, existingArray) => {
	const fileArray = existingArray || [];

	glob.sync(path)
		.forEach(filePath =>
			fileArray.push(filePath.substring(0, filePath.lastIndexOf('/'))));

	return fileArray;
};

function compileHbs() {
	const localPartials = [
		'templates/partials/layouts',
		'templates/partials/includes',
	];

	const options = {
		ignorePartials: true,
		batch: getDirectoriesFromGlob(
			'components/**/*.hbs',
			localPartials,
		),
		helpers,
	};

	return gulp.src('templates/views/**/*.hbs')
	.pipe(handlebars('', options))
	.pipe(rename((path) => {
		// eslint-disable-next-line no-param-reassign
		path.extname = '.html';
	}))
	.pipe(gulp.dest(paths.expo.docs));
}

function copyJs( jsCopyDone ) {
	paths.scripts.js_main.map( function(entry){
		return browserify({
			entries: [paths.scripts.js_folder + entry]
		})
		.transform ( babelify, { presets: ['@babel/preset-env'] } )
		.bundle()
		.pipe( source( entry ))
		.pipe(rename({ extname: '.min.js'}))
		.pipe( buffer())
		.pipe( sourcemaps.init({ loadmaps: true }))
		.pipe( uglify())
		.pipe( sourcemaps.write( './'))
		.pipe(gulp.dest(paths.expo.docs_js));
	});

	jsCopyDone();
		
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
	//Templates Watcher
	gulp.watch('templates/views/**/*.hbs', gulp.series(compileHbs,reload));
	gulp.watch('templates/partials/includes/*.hbs', gulp.series(compileHbs,reload));
	gulp.watch('templates/partials/layouts/*.hbs', gulp.series(compileHbs,reload));
	gulp.watch('templates/php/*.php', gulp.series(copyPHP,reload));
	gulp.watch('components/**/*.hbs', gulp.series(compileHbs,reload));

	//Scripts Watcher
	gulp.watch('js/**/*.js', gulp.series(copyJs, reload));
	gulp.watch('components/**/*.js', gulp.series(copyJs,reload));

	//Styles Watcher
	gulp.watch('scss/**/*.scss', gulp.series(copyCss, reload));
	gulp.watch('components/**/*.scss', gulp.series(copyCss,reload));

	//Image Watcher
	gulp.watch('img/**', gulp.series(copyImgDocs, reload));

	

};

/**
 *
 *
 * Start Tasks
 *
 * **/

gulp.task('default', gulp.series(cleanDocs, compileHbs, copyPHP, buildDirectory, copyJs, copyJsLibs, copyCss, copyImgDocs, serve, watcher));

gulp.task('build', gulp.series(cleanDocs, compileHbs, copyPHP, buildDirectory, copyJs, copyCss, copyImgDocs));

gulp.task('deleteAll', gulp.series(cleanDocs));



