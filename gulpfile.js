const { src, dest, series, watch } = require('gulp')
const htmlmin = require('gulp-htmlmin')
const cleanCss = require('gulp-clean-css')
const svgSprite = require('gulp-svg-sprite')
const imageMin = require('gulp-imagemin')
const babel = require('gulp-babel')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify-es').default
const notify = require('gulp-notify')
const del = require('del')
const browserSync = require('browser-sync').create()

const clean = () => {
    return del('dist')
}

const fonts = () => {
    return src('src/fonts/**')
        .pipe(dest('dist/fonts'))
}


const styles = () => {
    return src('src/styles/styles.css')
        .pipe(cleanCss({
            level: 2
        }))
        .pipe(dest('dist'))
        .pipe(browserSync.stream())

}

const htmlMinify = () => {
    return src('src/index.html')
        .pipe(htmlmin({
            collapseWhitespace: true,
        }))
        .pipe(dest('dist'))
        .pipe(browserSync.stream())

}

const svgSprites = () => {
    return src('src/images/svg/**/*.svg')
        .pipe(svgSprite({
            mode: {
                stack: {
                    sprite: '../sprite.svg'
                }
            }
        }))
        .pipe(dest('dist/images'))
}

const imageMinify = () => {
    return src([
            'src/images/*.jpg',
            'src/images/*.jpeg',
            'src/images/*.svg',
            'src/images/*.png',
        ])
        .pipe(imageMin())
        .pipe(dest('dist/images'))
}


const scripts = () => {
    return src([
            'src/js/*.js',
        ])
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(concat('main.js'))
        .pipe(uglify({
            toplevel: true
        }).on('error', notify.onError()))
        .pipe(dest('dist'))
        .pipe(browserSync.stream())
}


const watchFiles = () => {
    browserSync.init({
        server: {
            baseDir: 'dist'
        }
    })
}
watch('src/index.html', htmlMinify)
watch('src/styles/styles.css', styles)
watch('src/images/svg/*.svg', svgSprites)
watch([
    'src/images/*.jpg',
    'src/images/*.jpeg',
    'src/images/*.svg',
    'src/images/*.png',
], imageMinify)
watch('src/js/*.js', scripts)

exports.svg=svgSprites
exports.default= series(clean, htmlMinify, fonts, scripts, styles, svgSprites, imageMinify, watchFiles)