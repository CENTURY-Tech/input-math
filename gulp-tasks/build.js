var gulp = require("gulp");
var runSequence = require("run-sequence");

var minifyHTML = require("gulp-minify-html");
var inlineSource = require("gulp-inline-source");
var replace = require("gulp-replace");

var BUILD_DIR = ".build";

gulp.task("inline-and-minify", function () {
  return gulp
    .src(BUILD_DIR + "/*.html")
    .pipe(replace(/<!-- demo:(.*)-->/g, "$1"))
    .pipe(inlineSource({
      compress: false
    }))
    .pipe(minifyHTML())
    .pipe(gulp.dest(BUILD_DIR));
});

gulp.task("build:dev", ["clean:all", "lint:scss", "lint:ts"], function (cb) {
  runSequence(["tsc:dev", "sass:dev"], cb);
});

gulp.task("build:prod", ["clean:all", "lint:scss", "lint:ts"], function (cb) {
  runSequence(
    ["copy:assets", "tsc:prod", "sass:prod"],
    "inline-and-minify",
    "clean:inline",
//    "generate-docs",
    "copy:dist",
    cb);
});