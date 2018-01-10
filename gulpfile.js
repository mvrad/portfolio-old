"use strict";

const gulp = require("gulp"),
  concat = require("gulp-concat"),
  minify = require("gulp-babel-minify");

gulp.task("concatScripts", () => {
  gulp.src([
    "scripts/script.js",
    "scripts/slick.min.js"
  ])
  .pipe(concat("main.js"))
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
