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
      baseDir: "./dist/"
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
    .pipe(gulp.dest("dist/scripts"));
})

// Optimization Tasks 
// ------------------

// Optimizing HTML
gulp.task("minifyHTML", () => {
  return gulp.src("app/*.html")
    .pipe(htmlmin({
      collapseWhitespace: true
    }))
    .pipe(gulp.dest("dist"));
});

// Optimizing CSS 
gulp.task("minifyCSS", () => {
  return gulp.src("app/styles/css/*.css")
    .pipe(maps.init())
    .pipe(cssnano())
    .pipe(rename("application.min.css"))
    .pipe(maps.write("./"))
    .pipe(gulp.dest("dist/styles"));
})

// Optimizing JS
gulp.task("minifyScripts", () => {
  return gulp.src("app/scripts/main.js")
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
  return gulp.src("app/images/*")
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
  gulp.watch("app/styles/scss/**/*.scss", ["compileSass"])
    .on("change", browserSync.reload);
  gulp.watch("app/scripts/main.js", ["concatScripts"])
    .on("change", browserSync.reload);
  gulp.watch("app/*.html")
    .on("change", browserSync.reload);
  gulp.watch("app/*.php")
    .on("change", browserSync.reload);
})

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
    "imageMin",
  ], callback);
});

gulp.task("default", (callback) => {
  runSequence("build", [
    "browserSync",
    "watchFiles"
  ], callback);
});
