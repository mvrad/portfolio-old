"use strict";

const gulp = require("gulp"),
  browserSync = require("browser-sync").create(),
  htmlmin = require("gulp-htmlmin"),
  sass = require("gulp-sass"),
  maps = require("gulp-sourcemaps"),
  concat = require("gulp-concat"),
  cssnano = require('gulp-cssnano'),
  minifyJS = require("gulp-babel-minify"),
  rename = require("gulp-rename"),
  imagemin = require('gulp-imagemin'),
  cache = require("gulp-cache"),
  del = require("del"),
  runSequence = require("run-sequence");

// Development Tasks 
// -----------------

// Start browserSync server
gulp.task("browserSync", () => {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  })
})

// Compile Sass
gulp.task("compileSass", () => {
  return gulp.src("styles/scss/application.scss")
    .pipe(maps.init())
    .pipe(sass())
    .pipe(maps.write("./"))
    .pipe(gulp.dest("styles/css"))
    .pipe(browserSync.stream());
});

// Concatenating JS files
gulp.task("concatScripts", () => {
  return gulp.src([
    "scripts/script.js",
    "scripts/slick.min.js"
  ])
    .pipe(maps.init())
    .pipe(concat("main.js"))
    .pipe(maps.write("./"))
    .pipe(gulp.dest("scripts"));
})

// Optimization Tasks 
// ------------------

// Optimizing HTML
gulp.task("minifyHTML", () => {
  return gulp.src("*.html")
    .pipe(htmlmin({
      collapseWhitespace: true
    }))
    .pipe(rename("index.min.html"))
    .pipe(gulp.dest("dist"));
});

// Optimizing CSS 
gulp.task("minifyCSS", () => {
  return gulp.src("styles/css/*.css")
    .pipe(maps.init())
    .pipe(cssnano())
    .pipe(rename("application.min.css"))
    .pipe(gulp.dest("dist/styles/css"));
})

// Optimizing JS
gulp.task("minifyScripts", () => {
  return gulp.src("scripts/main.js")
    .pipe(minifyJS({
      mangle: {
        keepClassName: true
      }
    }))
    .pipe(rename("main.min.js"))
    .pipe(gulp.dest("dist/scripts"));
})

// Optimizing Images 
gulp.task("imageMin", () => {
  return gulp.src("images/*")
    .pipe(cache(imagemin({
      interlaced: true
    })))
    .pipe(gulp.dest("dist/images"))
})

// Watchers
gulp.task("watchFiles", [
  "browserSync",
  "compileSass"
], () => {
  gulp.watch("styles/scss/**/*.scss", ["compileSass"])
    .on("change", browserSync.reload);
  gulp.watch("scripts/main.js", ["concatScripts"])
    .on("change", browserSync.reload);
  gulp.watch("*.html")
    .on("change", browserSync.reload);
  gulp.watch("*.php")
    .on("change", browserSync.reload);
})

gulp.task("serve", ["watchFiles"]);

// Cleaning 
gulp.task("clean:dist", () => {
  return del.sync(["dist/**/*", "!dist/images", "!dist/images/**/*", "!dist/*.php"]);
})

// Build Sequences
// ---------------

gulp.task("build", (callback) => {
  runSequence("clean:dist", [
    "compileSass",
    "concatScripts",
    "minifyHTML",
    "minifyCSS",
    "minifyScripts",
    "imageMin"
  ], callback);
});

gulp.task("default", (callback) => {
  runSequence("build", [
  "browserSync",
  "watchFiles"
  ], callback);
});
