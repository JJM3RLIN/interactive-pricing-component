const {src,dest,watch} = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
//css
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const postcss = require('gulp-postcss');
//js
const terser = require('gulp-terser-js');
function compilarSass (){
    return src('src/sass/**/*.scss')
    .pipe (sourcemaps.init() )
    .pipe( sass() )
    .pipe( postcss([autoprefixer(), cssnano()]) ) //mejorando el performance de css
    .pipe( sourcemaps.write('.') )
    .pipe( dest('./build/css') );
}
function javascript(){
    return src('src/js/app.js')
    .pipe(sourcemaps.init() )
    .pipe( terser() )
    .pipe( sourcemaps.write('.') )
    .pipe( dest('build/js') )
}
function watchArchivos(){
    watch('src/sass/**/*.scss', compilarSass);
}
exports.compilarSass = compilarSass;
exports.javascript = javascript;
exports.watchArchivos = watchArchivos;