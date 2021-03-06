import { Component, Output, EventEmitter } from '@angular/core';
import { Bug } from '../models/Bug';
import { BugOperationsService } from '../services/bugOperations.service';

import axios from 'axios';

@Component({
	selector : 'app-bug-edit',
	template : `
		<section class="edit">
			<label for="">Bug Name :</label>
			<input type="text" (keyup)="newBugName = $event.target.value">
			<span> [ {{newBugName.length}} ] </span>
			<input type="button" value="Create New" (click)="onCreateNewClick()">
		</section>
	`
})
export class BugEditComponent{
	
	newBugName : string = '';

	@Output()
	bugCreated : EventEmitter<Bug> = new EventEmitter<Bug>();

	constructor(private bugOperations : BugOperationsService){

	}

	async onCreateNewClick(){
		
		/*this.bugOperations
			.createNew(this.newBugName)
			.then(newBug => this.bugCreated.emit(newBug));*/

		let newBug = await this.bugOperations.createNew(this.newBugName);
		this.bugCreated.emit(newBug);
		
	}

}