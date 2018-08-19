// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

let _ = require('lodash');
let path = require('path');
let rootLocation = path.join(__dirname, '../');
let suiteLocation = path.join(rootLocation,
  (_.isEmpty(process.env.SUITE_LOCATION))? 'e2e': _.trim(process.env.SUITE_LOCATION));

console.log('Running protractor suite ['+suiteLocation+']');


exports.config = {
  allScriptsTimeout: 11000,
  specs: [
    suiteLocation+'/**/*.e2e-spec.ts'
  ],
  capabilities: {
    'browserName': 'chrome'
  },
  directConnect: true,
  baseUrl: 'http://localhost:4200/',
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    print: function () {
    }
  },
  onPrepare: function() {
    require('ts-node').register({
      project: 'e2e/tsconfig.e2e.json'
    });
    var chai = require('chai');
    var chaiAsPromised = require("chai-as-promised");
    var protractorImageComparison = require('protractor-image-comparison');

    chai.use(chaiAsPromised);
    global.chai = chai;
    browser. protractorImageComparison = new protractorImageComparison(
      {
        baselineFolder: 'styles-artifacts/comparisons/baselines/',
        screenshotPath: 'styles-artifacts/comparisons/',
        autoSaveBaseline: true
      }
    );
  }
};
