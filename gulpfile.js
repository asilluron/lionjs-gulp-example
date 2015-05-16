var gulp = require('gulp');
var lion = require('lionjs');
var fs = require('fs');

var paths = {
    models: 'models/**/*.json'
};

gulp.task('watch', function () {

    gulp.watch(paths.models, function (event) {
        var jsonModelConfig = require(event.path);
        fs.writeFile("models.js", lion(jsonModelConfig));
    });
});

gulp.task('default', ['watch']);
