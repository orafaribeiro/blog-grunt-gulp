const { src, dest, watch } = require('gulp');
const concat = require('gulp-concat');
const cssmin = require('gulp-cssmin');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');

function stylesMethod() {

    return src('./assets/css/*.css')
        .pipe(concat('all.css'))
        .pipe(cssmin())
        .pipe(rename({ suffix: '.min' }))
        .pipe(dest('./dist'));

}

function scriptsMethod() {

    return src('./assets/js/*.js')
        .pipe(concat('all.js'))
        .pipe(uglify())
        .pipe(rename({ suffix: '.min' }))
        .pipe(dest('./dist'));

}

function watchFiles() {

    watch('./assets/css/*.css', stylesMethod);

    watch('./assets/js/*.js', scriptsMethod);

}

exports.styles = stylesMethod;
exports.scripts = scriptsMethod;
exports.default = watchFiles;