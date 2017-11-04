var gulp = require("gulp");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var cssvars = require("postcss-simple-vars");
var nested = require("postcss-nested");
var cssImport = require("postcss-import");
var mixins = require("postcss-mixins");

gulp.task("styles", function () {
   return gulp.src("./app/styles/styles.css")
      .pipe(postcss([cssImport, mixins, cssvars, autoprefixer, nested]))
      .on('error', function (err) {
         console.log(err.toString());

         this.emit('end');
      })
      .pipe(gulp.dest("./app/main"));
});