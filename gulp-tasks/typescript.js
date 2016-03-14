var gulp = require("gulp");

var sourceMaps = require("gulp-sourcemaps");
var tsc = require("gulp-typescript");
var uglify = require("gulp-uglify");

var BUILD_DIR = ".build";

gulp.task("tsc:dev", ["lint:ts"], function () {
  var options = require("../tsconfig.json").compilerOptions;
  options.outDir = ".";
  options.rootDir = ".";

  return gulp
    .src("src/*.ts")
    .pipe(sourceMaps.init())
    .pipe(tsc(options))
    .pipe(sourceMaps.write())
    .pipe(gulp.dest(BUILD_DIR));
});

gulp.task("tsc:prod", function () {
  var options = require("../tsconfig.json").compilerOptions;
  options.outDir = ".";
  options.rootDir = ".";
  options.removeComments = true;

  return gulp
    .src("src/*.ts")
    .pipe(tsc(options))
    .pipe(uglify({
      mangle: false
    }))
    .pipe(gulp.dest(BUILD_DIR));
});