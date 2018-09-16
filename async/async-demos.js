var app = (function(){

	function addSync(x,y){
		console.log(`	[@Service] processing ${x} and ${y}`);
		var result = x + y;
		console.log(`	[@Service] returning result`);
		return result;
	}

	function addSyncClient(x,y){
		console.log(`[@Client] triggering addSync`);
		var result = addSync(x,y);
		console.log(`[@Client] result = ${result}`);
	}

	function addAsync(x,y, callback){
		console.log(`	[@Service] processing ${x} and ${y}`);
		setTimeout(function(){
			var result = x + y;
			console.log(`	[@Service] returning result`);
			//return result;
			if (typeof callback === 'function')
				callback(result);
		}, 5000);
	}

	function addAsyncClient(x,y){
		console.log(`[@Client] triggering addAsync`);
		addAsync(x,y, function(result){
			console.log(`[@Client] result = ${result}`);	
		});
		
	}

	function addAsyncPromise(x,y){
		console.log(`	[@Service] processing ${x} and ${y}`);

		var promise = new Promise(function(resolveFn, rejectFn){
			setTimeout(function(){
				var result = x + y;
				console.log(`	[@Service] returning result`);
				resolveFn(result);
			}, 5000);
		});

		return promise;
	}

	return { addSyncClient, addAsyncClient, addAsyncPromise };

})();

//Observables

let timer = rx.Observable.create(function(subscriber){
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

var subscriber = timer.subscribe(
	d => console.log(d),
	null,
	() => console.log('Thats all folks')
);

//to stop the subscription
//subscriber.unsubscribe();
