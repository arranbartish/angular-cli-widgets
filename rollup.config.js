import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

export default {
  entry: 'aot/index.js',
  dest: 'aot/bundles/arranbartishAngularCliWidgets.umd.js',
  sourceMap: false,
  format: 'umd',
  plugins: [
    resolve({ jsnext: true, main: true }),
    commonjs()
  ],
  moduleName: 'ng.arranbartishAngularCliWidgets',
  globals: {
    '@angular/core': 'ng.core',
    '@angular/common': 'ng.common',
    '@angular/router': 'ng.router',
    '@angular/forms': 'ng.forms',
    'rxjs/Observable': 'Rx',
    'rxjs/ReplaySubject': 'Rx',
    'rxjs/add/operator/map': 'Rx.Observable.prototype',
    'rxjs/add/operator/mergeMap': 'Rx.Observable.prototype',
    'rxjs/add/observable/fromEvent': 'Rx.Observable',
    'rxjs/add/observable/of': 'Rx.Observable'
  }
}
