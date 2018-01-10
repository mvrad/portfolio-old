"use strict";

const gulp = require("gulp"),
  concat = require("gulp-concat"),
  uglify = require("gulp-uglify");

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
    .pipe(uglify())
    .pipe(gulp.dest("scripts"));
});
