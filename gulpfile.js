var gulp = require('gulp');
var shell = require('gulp-shell');
// var Server = require('karma').Server;

gulp.task('default', ['test']);

gulp.task('debug', shell.task('node --inspect --debug-brk index.js'));

gulp.task('run', shell.task('node index.js'));

gulp.task("doc", shell.task("npm run doc"));


// gulp.task('test', function (done) {
//     new Server({
//     configFile: __dirname + '/karma.conf.js',
//     singleRun: true
//     }, done).start();
//   });
//
// gulp.task('tdd', function (done) {
//     new Server({
//     configFile: __dirname + '/karma.conf.js'
//     }, done).start();
// });
