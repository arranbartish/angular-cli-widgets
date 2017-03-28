import { Injectable } from '@angular/core';
import * as _ from 'lodash';

@Injectable()
export class ObjectService {

  constructor() { }

  // deepCopy<T>(source: T) {
  // only does shallow cause lodash will not resolve

  shallowCopy<T>(target: T, source: T) {
    _.assign(target, source);
    return target;
  }

}
