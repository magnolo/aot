var gulp = require('gulp');
var gulpDocs = require('gulp-ngdocs');
var Elixir = require('laravel-elixir');

var Task = Elixir.Task;

Elixir.extend('gulpDocs', function(src) {

    var baseDir = src || Elixir.config.assetsPath + '/angular/';

    new Task('gulp-docs', function() {
        return gulp.src(baseDir + '/**/*.js')
            .pipe(gulpDocs.process())
            .pipe(gulp.dest('./docs'));
    });
});
