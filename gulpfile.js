"use strict";

const gulp = require("gulp"),
  browserSync = require("browser-sync").create(),
  concat = require("gulp-concat"),
  minify = require("gulp-babel-minify"),
  sass = require("gulp-sass"),
  maps = require("gulp-sourcemaps");

gulp.task("browser-sync", () => {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });
});

gulp.task("concatScripts", () => {
  gulp.src([
    "scripts/script.js",
    "scripts/slick.min.js"
  ])
  .pipe(maps.init())
  .pipe(concat("main.js"))
  .pipe(maps.write("./"))
  .pipe(gulp.dest("scripts"));
});

gulp.task("minifyScripts", () => {
  gulp.src("scripts/main.js")
    .pipe(minify({
      mangle: {
        keepClassName: true
      }
    }))
    .pipe(gulp.dest("scripts"));
});

gulp.task("watchSass", () => {
  gulp.watch("styles/scss/**/*.scss",
  ["compileSass"]);
  gulp.watch("*.html")
    .on("change", browserSync.reload);
});

gulp.task("compileSass", () => {
  gulp.src("styles/scss/application.scss")
    .pipe(sass())
    .pipe(gulp.dest("styles/css"))
    .pipe(browserSync.stream());
});

gulp.task("build", [
  "browser-sync",
  "concatScripts",
  "minifyScripts",
  "compileSass",
  "watchSass",
  "compileSass"
]);

gulp.task("default", ["build"]);
