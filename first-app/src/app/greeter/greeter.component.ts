import { Component } from '@angular/core';

@Component({
	selector : 'app-greeter',
	templateUrl : 'greeter.component.html'
})
export class GreeterComponent{
	userName : string = '';
	greetMessage : string = '[Dummy greet message]'

	onGreetClick(){
		this.greetMessage = `Hi ${this.userName}, Have a nice day!!`;
	}
}