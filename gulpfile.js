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

gulp.task("compileSass", () => {
  return gulp.src("styles/scss/application.scss")
    .pipe(maps.init())
    .pipe(sass())
    .pipe(maps.write("./"))
    .pipe(gulp.dest("styles/css"))
    .pipe(browserSync.stream());
});

gulp.task("concatScripts", () => {
  return gulp.src([
    "scripts/script.js",
    "scripts/slick.min.js"
  ])
    .pipe(maps.init())
    .pipe(concat("main.js"))
    .pipe(maps.write("./"))
    .pipe(gulp.dest("scripts"));
});

gulp.task("minifyScripts", () => {
  return gulp.src("scripts/main.js")
    .pipe(minify({
      mangle: {
        keepClassName: true
      }
    }))
      .pipe(gulp.dest("scripts"));
});

gulp.task("watchFiles", () => {
  gulp.watch("*.html")
    .on("change", browserSync.reload);
  gulp.watch("styles/scss/**/*.scss", ["compileSass"])
    .on("change", browserSync.reload);
  gulp.watch("scripts/main.js*", ["concatScripts"])
    .on("change", browserSync.reload);
});

gulp.task("serve", ["watchFiles"]);

gulp.task("build", [
  "browser-sync",
  "compileSass",
  "concatScripts",
  "minifyScripts",
  "watchFiles"
]);

gulp.task("default", ["build"]);
