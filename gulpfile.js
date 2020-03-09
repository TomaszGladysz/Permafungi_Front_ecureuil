// ****************************
// 1. Déclaration des variables
// ****************************

var gulp                = require('gulp');
var sass                = require('gulp-sass');
var rename              = require("gulp-rename");
var minify              = require('gulp-minify');
var autoprefixer        = require('gulp-autoprefixer');
var browserSync         = require('browser-sync');
var wait                = require('gulp-wait');
var imagemin            = require('gulp-imagemin');
var imageminPngquant    = require('imagemin-pngquant');
var imageminZopfli      = require('imagemin-zopfli');
var imageminMozjpeg     = require('imagemin-mozjpeg'); 
var imageminGiflossy    = require('imagemin-giflossy');
var cache               = require('gulp-cache');

// *************
// 2. Mes tâches
// *************

// Moulinette SASS
gulp.task('sassification', function () {
    return gulp.src('./dev/css/**/*.scss')
        .pipe(wait(200))
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(rename(function (path) {
            path.basename += ".min";
        }))
        .pipe(gulp.dest('./prod/css'));
});

// Moulinette JS
gulp.task('jsification', function () {
    return gulp.src('./dev/js/*.js')
        .pipe(wait(200))
        .pipe(minify({
            ext: {
                min: '.min.js'
            },
            noSource:true
        }))
        .pipe(gulp.dest('./prod/js'));
});

// Moulinette HTML
gulp.task('htmlification', function () {
    return gulp.src('./dev/*.html')
        .pipe(wait(200))
        .pipe(gulp.dest('./prod'));
});

// Browser Sync
gulp.task('browser-sync', function () {
    browserSync.init({
        server: {
            baseDir: "./prod/"
        }
    });
});

// Smushage
gulp.task('compress', function () {
    return gulp.src('dev/img/*.{gif,jpg,png,svg,jpeg}')
        .pipe(cache(imagemin([
            //png
            imageminPngquant({
                speed: 1,
                quality: 98 //lossy settings
            }),
            imageminZopfli({
                more: true
                // iterations: 50 // very slow but more effective
            }),
            //gif
            // imagemin.gifsicle({
            //     interlaced: true,
            //     optimizationLevel: 3
            // }),
            //gif very light lossy, use only one of gifsicle or Giflossy
            imageminGiflossy({
                optimizationLevel: 3,
                optimize: 3, //keep-empty: Preserve empty transparent frames
                lossy: 2
            }),
            //svg
            imagemin.svgo({
                plugins: [{
                    removeViewBox: false
                }]
            }),
            //jpg lossless
            imagemin.jpegtran({
                progressive: true
            }),
            //jpg very light lossy, use vs jpegtran
            imageminMozjpeg({
                quality: 90
            })
        ])))
        .pipe(gulp.dest('prod/img'))
});


// ***********************
// 3. Exécution des tâches
// ***********************
gulp.task('observe', gulp.parallel('browser-sync','compress', 'htmlification', 'sassification', 'jsification', function () {
    gulp.watch('./dev/css/**/*.scss', gulp.series('sassification'));
    gulp.watch('./dev/js/*.js', gulp.series('jsification'));
    gulp.watch('./dev/*.html', gulp.series('htmlification'));
    gulp.watch('./prod/*.html').on('change', browserSync.reload);
    gulp.watch('./prod/css/*.css').on('change', browserSync.reload);
    gulp.watch('./prod/js/*.js').on('change', browserSync.reload);
}));

gulp.task('default', gulp.series('observe'));