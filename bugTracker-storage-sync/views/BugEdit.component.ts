import { Component, Output, EventEmitter } from '@angular/core';
import { Bug } from '../models/Bug';
import { BugOperationsService } from '../services/bugOperations.service';

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

	onCreateNewClick(){
		let newBug = this.bugOperations.createNew(this.newBugName);
		//this.list = [...this.list, newBug];
		this.bugCreated.emit(newBug);
	}

}