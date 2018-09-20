import { Component, OnInit } from '@angular/core';
import { Bug } from './models/Bug';
import { BugOperationsService } from './services/bugOperations.services';

@Component({
	selector : 'app-bug-tracker',
	templateUrl : 'bugTracker.component.html'
})
/*export class BugTrackerComponent{
	bugs : Bug[] = [];
	
	sortAttr : string = 'name';
	sortDesc : boolean = false;

	constructor(private bugOperations : BugOperationsService){
		this.bugOperations
			.getAll()
			.then(bugs => this.bugs = bugs);
	}

	onNewBugCreated(newBug){
		this.bugs = [...this.bugs, newBug];
	}
	

	onBugNameClick(bugToToggle){
		this.bugOperations
			.toggle(bugToToggle)
			.then(toggledBug => this.bugs = this.bugs.map(bug => bug === bugToToggle ? toggledBug : bug));
	}

	onRemoveClosedClick(){
		this.bugs
			.filter(bug => bug.isClosed)
			.forEach(closedBug => this.bugOperations.remove(closedBug));

		this.bugs = this.bugs.filter(bug => !bug.isClosed);
	}
}*/

export class BugTrackerComponent implements OnInit{
	bugs : Bug[] = [];
	
	sortAttr : string = 'name';
	sortDesc : boolean = false;

	message: string = '';

	constructor(private bugOperations : BugOperationsService){
		
		
			
	}

	ngOnInit(){

		this.bugOperations
			.getAll()
			.subscribe(bugs => this.bugs = bugs);
	}

	onNewBugCreated(newBug){
		this.bugs = [...this.bugs, newBug];
	}
	

	onBugNameClick(bugToToggle){
		this.bugOperations
			.toggle(bugToToggle)
			.subscribe(toggledBug => this.bugs = this.bugs.map(bug => bug === bugToToggle ? toggledBug : bug));
		
	}

	onRemoveClosedClick(){
		this.bugs
			.filter(bug => bug.isClosed)
			.forEach(closedBug => this.bugOperations.remove(closedBug));

		this.bugs = this.bugs.filter(bug => !bug.isClosed);
	}
}