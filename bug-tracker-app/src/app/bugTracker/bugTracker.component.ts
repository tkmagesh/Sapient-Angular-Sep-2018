import { Component } from '@angular/core';
import { Bug } from './models/Bug';

@Component({
	selector : 'app-bug-tracker',
	templateUrl : 'bugTracker.component.html'
})
export class BugTrackerComponent{
	list : Bug[] = [];

	onCreateNewClick(newBugName : string){
		let newBug : Bug = {
			name : newBugName,
			isClosed : false
		};
		this.list.push(newBug);
	}

	onBugNameClick(bug : Bug){
		bug.isClosed = !bug.isClosed;
	}

	onRemoveClosedClick(){
		this.list = this.list.filter(bug => !bug.isClosed);
	}

	getClosedCount(){
		return this.list.reduce((result, bug) => bug.isClosed ? ++result : result, 0);
	}
}