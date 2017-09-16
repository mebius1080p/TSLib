"use strict";
const gulp = require('gulp4');
const exec = require('child_process').exec;
const browserify = require('browserify');
const source = require('vinyl-source-stream');

gulp.task("tsc", done => {
	console.log("tsc!");
	return exec("tsc", (err, stdout, stderr) => {
		done(err);
	});
});

gulp.task("sample1", () => {
	console.log("sample1");
	return browserify({ entries: ["dist/sample/async.js"] }).bundle()
		.pipe(source("async.js"))
		.pipe(gulp.dest("sample/"));
});


const seriesFunc = gulp.series("tsc", gulp.parallel("sample1"));

gulp.task("default", done => {
	seriesFunc();
	done();
});