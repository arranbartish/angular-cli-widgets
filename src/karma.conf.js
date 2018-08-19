// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['mocha', '@angular-devkit/build-angular'],
    plugins: [
      'karma-mocha',
      'karma-chai',
      'karma-sinon',
      'karma-sinon-chai',
      'karma-chrome-launcher',
      'karma-phantomjs-launcher',
      'karma-mocha-reporter',
      'karma-coverage-istanbul-reporter',
      'karma-istanbul-threshold',
      '@angular-devkit/build-angular/plugins/karma'
    ],
    client: {
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    files: [
      { pattern: '../node_modules/sinon/pkg/sinon.js', instrument: false },
      { pattern: '../node_modules/chai/chai.js', instrument: false },
      { pattern: '../node_modules/sinon-chai/lib/sinon-chai.js', instrument: false },
      { pattern: 'test.ts', watched: false }
    ],
    mime: {
      'text/x-typescript': ['ts','tsx']
    },
    coverageIstanbulReporter: {
      dir: require('path').join(__dirname, '../coverage'),
      reports: [ 'html', 'lcovonly', 'json' ],
      fixWebpackSourcePaths: true
    },
    istanbulThresholdReporter: {
      src: 'coverage/coverage-final.json',
      reporters: ['text'],
      thresholds: {
        global: {
          statements: 89.57,
          branches: 63.89,
          lines: 87.5,
          functions: 91.89
        },
        each: {
          statements: 45.45,
          branches: 0,
          lines: 40,
          functions: 60
        }
      }
    },
    // reporters: ['progress', 'mocha'],
    reporters: config.angularCli && config.angularCli.codeCoverage
              ? ['progress', 'coverage-istanbul', 'istanbul-threshold']
              : ['progress', 'mocha'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_DEBUG,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false
  });
};
