var gulp = require('gulp');
// var inlineResources = require('./scripts/gulp/inline-resources');
// var sass = require('gulp-sass');
let path = require('path');
var fs = require('fs');
var git = require('gulp-git');
// var jeditor = require('gulp-json-editor');
var _ = require('lodash');
var run = require('gulp-run');

var baselineCode = 'master';
var baselineRepo = 'https://github.com/arranbartish/angular-cli-widgets.git';

let rootLocation = path.join(__dirname, './');
var baselineRepoLocation = path.join(rootLocation, './styles-artifacts/baseline-repo');
const NOT_FOUND = 34;



gulp.task('change-to-repository-location', function () {
  return gulp.src('./package.json')
    .on('end', function () {
      console.info('cd ' + baselineRepoLocation);
      return;
    })
    .on('end', function () {
      process.chdir(baselineRepoLocation);
    });
});

gulp.task('update-to-latest-code-base', ['change-to-repository-location'], function () {

  return gulp.src('./package.json')
    .on('end', function () {
      console.info('git fetch');
    })
    .on('end', function () {
      git.fetch('', '', {args: '--all'}, function (err) {
        if (err) throw err;
      });
    });
});

gulp.task('checkout-baseline-code', ['update-to-latest-code-base'], function () {

  return gulp.src('./package.json')
    .on('end', function () {
      console.info('git checkout ' + baselineCode);
    })
    .on('end', function () {
      git.checkout(baselineCode, function (err) {
        if (err) throw err;
      });
    });
});

gulp.task('rebase-most-recent-changes-to-baseline-code', ['checkout-baseline-code'], function () {

  return gulp.src('./package.json')
    .on('end', function () {
      console.info('git pull --rebase origin ' + baselineCode);
    })
    .on('end', function () {
      git.pull('origin', baselineCode, {args: '--rebase'}, function (err) {
        //if (err) throw err;
      });
    });
});


gulp.task('update-existing-repo', ['rebase-most-recent-changes-to-baseline-code'], function () {
  return gulp.src('./package.json')
    .on('end', function () {
      console.info('updated existing repo');
    });

});

gulp.task('clone-code-base', function () {

  return gulp.src('./package.json')
    .on('end', function () {
      console.info('git clone ' + baselineRepo + ' ' + baselineRepoLocation);
    })
    .on('end', function () {
      git.clone(baselineRepo, {args: baselineRepoLocation}, function(err) {
        if (err) throw err;
      });
    });

});

gulp.task('change-to-cloned-repository-location', ['clone-code-base'], function () {

  return gulp.src('./package.json')
    .on('end', function () {
      console.info('cd ' + baselineRepoLocation);
      return;
    })
    .on('end', function () {
      process.chdir(baselineRepoLocation);
    });
});

gulp.task('checkout-cloned-baseline-code', ['change-to-cloned-repository-location'], function () {

  return gulp.src('./package.json')
    .on('end', function () {
      console.info('git checkout ' + baselineCode);
    })
    .on('end', function () {
      git.checkout(baselineCode, function (err) {
        //if (err) throw err;
      });
    });
});

gulp.task('setup-new-repo', ['checkout-cloned-baseline-code'], function () {
  return gulp.src('./package.json')
    .on('end', function () {
      console.info('new repo setup');
    });
});

gulp.task('clone-baseline-code-and-checkout-codebase', (directoryExists(baselineRepoLocation)?['update-existing-repo']:['setup-new-repo']), function () {
  console.info('clone baseline code and checkout codebase');
  // if ( directoryExists(baselineRepoLocation) ) {
  //   changeToRepositoryLocation();
  //   updateToLatestCodeBase();
  //   checkoutBaselineCode();
  //   rebaseMostRecentChangesToBaselineCode();
  // } else {
  //   cloneCodeBase();
  //   changeToRepositoryLocation();
  //   checkoutBaselineCode();
  // }
  // //ensureLatestNodeModules();
  // generateBaslineResources();

});

function directoryExists(directory) {
  let result = false;
  let message = directory + ' directory does not exist';

  if(fs.existsSync(directory)) {
    result = true;
    message = directory + ' directory exists';
  }

  console.info(message);
  return result;
}




function cloneCodeBase() {
  console.info('git clone ' + baselineRepo + ' ' + baselineRepoLocation);
  git.clone(baselineRepo, {args: baselineRepoLocation}, function(err) {
    if (err) throw err;
  });
}

function rebaseMostRecentChangesToBaselineCode(){
  console.info('git pull --rebase');
  git.pull('origin', baselineCode, {args: '--rebase'}, function (err) {
    if (err) throw err;
  });
}


function checkoutBaselineCode() {
  console.info('git checkout ' + baselineCode);
  git.checkout(baselineCode, function (err) {
    if (err) throw err;
  });
}

function ensureLatestNodeModules() {
  let cmd = new run.Command('npm');
}

function generateBaslineResources() {
  console.info('generateBaslineResources');

  //gulp.pipe().on('end', makeBaslineResourcesAvailable);
}

function makeBaslineResourcesAvailable() {
  console.info('makeBaslineResourcesAvailable');
}

gulp.task('default', ['clone-baseline-code-and-checkout-codebase']);
