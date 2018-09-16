import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Bug } from './models/Bug';
import { BugOperationsService } from './services/bugOperations.service';
import { IBugOperations } from './contracts/IBugOperations';

import axios from 'axios';

@Component({
	selector : 'app-bug-tracker',
	templateUrl : 'bugTracker.component.html',
	styleUrls : ['bugTracker.component.css'],
	encapsulation : ViewEncapsulation.None
})
export class BugTrackerComponent implements OnInit{

	list : Bug[] = [];

	sortAttrName : string = 'name';

	sortDesc : boolean = false;

	constructor(private bugOperations : BugOperationsService){
		
	}

	ngOnInit(){
		axios.get('http://localhost:3000/bugs')
			.then(response => response.data)
			.then(bugs => this.list = bugs);
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