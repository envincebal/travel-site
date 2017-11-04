var gulp = require("gulp");
var watch = require("gulp-watch");
var browserSync = require("browser-sync").create();

gulp.task("watch", function () {

   browserSync.init({
      notify: false,
      server: {
         baseDir: "app"
      }
   });

   watch("./app/index.html", function () {
      browserSync.reload();
   });

   watch("./app/styles/**/*.css", function () {
      gulp.start("cssInject");
   });
});

gulp.task("cssInject", ["styles"], function () {
   gulp.src("./app/main/styles.css")
      .pipe(browserSync.stream());
})
