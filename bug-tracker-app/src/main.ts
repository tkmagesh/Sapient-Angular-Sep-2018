import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import * as rx from 'rxjs';
import { map, take } from 'rxjs/operators';

window['rx'] = rx;

/*rx.from([10,20,30,40])
	.pipe(map(no => no * 2))
	.subscribe(no => console.log(no));*/

let timerObservable = rx.Observable.create(function(subscriber){
	var counter = 0;
	var id = setInterval(function(){
		if (++counter <= 10) {
			subscriber.next(new Date());
        } else {
			clearInterval(id);
			subscriber.complete();
        }
    },1000);
});

timerObservable.pipe(take(3))
	.subscribe(d => console.log(d));


if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));

