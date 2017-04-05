var gulp = require('gulp');
var inlineResources = require('./scripts/gulp/inline-resources');
var sass = require('gulp-sass');


gulp.task('copy-and-inline-resource', copyHtml);

function copyHtml() {
  gulp.src('src/app/**/*.html')
    .pipe(gulp.dest('./aot/src/app')).on('end', copyAssets);
}

function copyAssets () {
  gulp.src('./src/assets/**/*')
    .pipe(gulp.dest('./aot/assets')).on('end', copyScss);
}
function copyScss () {
  gulp.src('./src/app/**/*.scss')
    .pipe(gulp.dest('./aot/src/app')).on('end', copyGitIgnoreFiles);
}

function copyGitIgnoreFiles () {
  gulp.src('./**/.gitignore')
    .pipe(gulp.dest('./aot')).on('end', copyNpmIgnoreFiles);
}

function copyNpmIgnoreFiles () {
  gulp.src('./**/.npmignore')
    .pipe(gulp.dest('./aot')).on('end', copyPackageJsonFile);
}

function copyPackageJsonFile () {
  gulp.src('./package.json')
    .pipe(gulp.dest('./aot')).on('end', copyLicenseFile);
}

function copyLicenseFile () {
  gulp.src('./LICENSE')
    .pipe(gulp.dest('./aot')).on('end', copyReadmeMdFile);
}

function copyReadmeMdFile () {
  gulp.src('./README.md')
    .pipe(gulp.dest('./aot')).on('end', inlineResource);
}

function inlineResource() {
  inlineResources('./aot/src/app');
}

gulp.task('default', ['copy-and-inline-resource']);
