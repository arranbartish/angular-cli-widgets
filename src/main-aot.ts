import { enableProdMode } from '@angular/core';
import {platformBrowser} from '@angular/platform-browser';

import { AppModuleNgFactory } from '../dist/aot/src/app/app.module.ngfactory';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);
