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

	async ngOnInit(){

		this.list = await this.bugOperations.getAll();

		/*this.bugOperations
			.getAll()
			.then(bugs => this.list = bugs);*/
	}

	onNewBug(bug : Bug){
		this.list = [...this.list, bug];
	}

	async onBugNameClick(bugToToggle : Bug){
		let toggledBug = await this.bugOperations.toggle(bugToToggle);
		this.list = this.list.map(bug => bug === bugToToggle ? toggledBug : bug);

		/*this.bugOperations
			.toggle(bugToToggle)
			.then(toggledBug => this.list = this.list.map(bug => bug === bugToToggle ? toggledBug : bug));*/
	}

	onRemoveClosedClick(){
		this
			.list
			.filter(bug => bug.isClosed)
			.forEach(async closedBug => {
				await this.bugOperations.remove(closedBug);
				this.list = this.list.filter(bug => bug !== closedBug);
			});
	}

	
}