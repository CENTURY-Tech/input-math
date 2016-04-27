var gulp = require("gulp");
var browserSync = require("browser-sync").create();

var BUILD_DIR = ".build";
var DIST_DIR = "dist";

gulp.task("serve:demo", function () {
  browserSync.init({
    server: {
      baseDir: [DIST_DIR]
    }
  });
});

gulp.task("serve:docs", function () {
  browserSync.init({
    server: {
      baseDir: ["docs"]
    }
  });
});

gulp.task("serve:dev", ["build:dev"], function () {
  browserSync.init({
    server: {
      baseDir: [BUILD_DIR, "src", "bower_components", "node_modules"],
      routes: {
        "/bower_components": "bower_components",
        "/node_modules": "node_modules"
      },
      index: "demo.html"
    }
  });

  gulp.watch("src/*.scss", ["sass:dev"]);
  gulp.watch("src/*.ts", ["tsc:dev"]);

  gulp.watch([
    BUILD_DIR + "/*.js",
    BUILD_DIR + "/*.css"
  ], browserSync.reload);

  gulp.watch([
    "**/*.html"
  ], browserSync.reload);
});