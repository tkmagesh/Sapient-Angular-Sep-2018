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
		/*this.list.push(this.bugOperations.createNew('Server communication failure'));
		this.list.push(this.bugOperations.createNew('Data integrity checks failed'));
		this.list.push(this.bugOperations.createNew('Application not responding'));
		this.list.push(this.bugOperations.createNew('User actions not recognized'));*/

		this.list = this.bugOperations.getAll();
	}

	onNewBug(bug : Bug){
		this.list = [...this.list, bug];
	}

	onBugNameClick(bugToToggle : Bug){
		let toggledBug = this.bugOperations.toggle(bugToToggle);
		this.list = this.list.map(bug => bug === bugToToggle ? toggledBug : bug);
	}

	onRemoveClosedClick(){
		this
			.list
			.filter(bug => bug.isClosed)
			.forEach(closedBug => this.bugOperations.remove(closedBug));
			
		this.list = this.list.filter(bug => !bug.isClosed);
	}

	
}