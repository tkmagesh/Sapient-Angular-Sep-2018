import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';


/*import { Calculator } from './app/Calculator';

let calc = new Calculator();

console.log(calc.add(100,200));
console.log(calc.subtract(100,200));*/

/*import * as moment from 'moment';

console.log(moment('2018-07-26T09:33:36.892Z').fromNow());*/

import axios from 'axios';

window['axios'] = axios;

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));

