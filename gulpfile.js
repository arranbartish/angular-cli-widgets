var gulp = require('gulp');
var inlineResources = require('./scripts/gulp/inline-resources');
var sass = require('gulp-sass');


gulp.task('copy-resources', copyGitIgnoreFiles);

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
    .pipe(gulp.dest('./aot'));
}

gulp.task('default', ['copy-resources']);
