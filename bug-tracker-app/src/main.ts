import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import * as rx from 'rxjs';
import { map } from 'rxjs/operators';

window['rx'] = rx;

rx.from([10,20,30,40])
	.pipe(map(no => no * 2))
	.subscribe(no => console.log(no));

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));

