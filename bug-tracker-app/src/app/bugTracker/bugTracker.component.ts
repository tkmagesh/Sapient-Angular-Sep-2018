import { Component, ViewEncapsulation } from '@angular/core';
import { Bug } from './models/Bug';
import { BugOperationsService } from './services/bugOperations.service';
import { IBugOperations } from './contracts/IBugOperations';

@Component({
	selector : 'app-bug-tracker',
	templateUrl : 'bugTracker.component.html',
	styleUrls : ['bugTracker.component.css'],
	encapsulation : ViewEncapsulation.None
})
export class BugTrackerComponent{

	list : Bug[] = [];

	sortAttrName : string = 'name';

	sortDesc : boolean = false;
	
	/*
	bugOperations : BugOperationsService = null;

	constructor(_bugOperations : BugOperationsService){
		this.bugOperations = _bugOperations;
	}
	*/

	constructor(private bugOperations : BugOperationsService){
		this.list.push(this.bugOperations.createNew('Server communication failure'));
		this.list.push(this.bugOperations.createNew('Data integrity checks failed'));
		this.list.push(this.bugOperations.createNew('Application not responding'));
		this.list.push(this.bugOperations.createNew('User actions not recognized'));
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