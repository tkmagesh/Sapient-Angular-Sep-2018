import { Component, ViewEncapsulation } from '@angular/core';
import { Bug } from './models/Bug';
import { BugOperationsService } from './services/bugOperations.service';

@Component({
	selector : 'app-bug-tracker',
	templateUrl : 'bugTracker.component.html',
	styleUrls : ['bugTracker.component.css'],
	encapsulation : ViewEncapsulation.None
})
export class BugTrackerComponent{
	list : Bug[] = [];

	bugOperations : BugOperationsService = null;

	constructor(_bugOperations : BugOperationsService){
		this.bugOperations = _bugOperations;
	}

	onCreateNewClick(newBugName : string){
		let newBug = this.bugOperations.createNew(newBugName);
		this.list.push(newBug);
	}

	onBugNameClick(bug : Bug){
		this.bugOperations.toggle(bug);
	}

	onRemoveClosedClick(){
		this.list = this.list.filter(bug => !bug.isClosed);
	}

	
}