var gulp = require("gulp");

var rename = require("gulp-rename");

var BUILD_DIR = ".build";
var DIST_DIR = "dist";

gulp.task("copy:assets", function () {
  return gulp
    .src(["src/*", "!src/*.ts", "!src/*.scss", "demo.html"])
    .pipe(gulp.dest(BUILD_DIR));
});

gulp.task("copy:dist", function () {
  return gulp
    .src([BUILD_DIR + "/**/*", "docs/index.html"])
    .pipe(gulp.dest(DIST_DIR));
});