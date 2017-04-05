import { enableProdMode } from '@angular/core';
import {platformBrowser} from '@angular/platform-browser';

import { WidgetModuleNgFactory } from '../aot/src/app/widget/widget.module.ngfactory';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowser().bootstrapModuleFactory(WidgetModuleNgFactory);
