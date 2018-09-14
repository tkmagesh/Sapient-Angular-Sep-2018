import { Component } from '@angular/core';

@Component({
	selector : 'app-greeter',
	templateUrl : 'greeter.component.html'
})
/*export class GreeterComponent{
	userName : string = '';
	greetMessage : string = "[Dummy greet message]";

	onGreetClick(userName : string){
		this.userName = userName;
		this.greetMessage = `Hi ${this.userName}, Have a nice day!!`;
	}
}*/

export class GreeterComponent{
	userName : string = '';
	greetMessage : string = "[Dummy greet message]";

	/*onUserNameChange(value : string){
		this.userName = value;
	}*/

	onGreetClick(){
		this.greetMessage = `Hi ${this.userName}, Have a nice day!!`;
	}
}
