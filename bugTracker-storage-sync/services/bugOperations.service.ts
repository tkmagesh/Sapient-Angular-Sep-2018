import { Injectable } from '@angular/core';

import { Bug } from '../models/Bug';
import { IBugOperations } from '../contracts/IBugOperations';
import { BugStorageService } from './bugStorage.service';


@Injectable()
export class BugOperationsService implements IBugOperations {
	
	constructor(private bugStorage : BugStorageService){

	}	
	createNew(newBugName : string ) : Bug {
		let newBug : Bug = {
			id : 0,
			name : newBugName,
			isClosed : false,
			createdAt : new Date()
		};
		this.bugStorage.save(newBug);
		return newBug;
	}

	toggle(bugToToggle : Bug) : Bug {
		let toggledBug = { ...bugToToggle, isClosed : !bugToToggle.isClosed};
		this.bugStorage.save(toggledBug);
		return toggledBug;
	}

	remove(bug : Bug){
		this.bugStorage.remove(bug);
	}

	getAll(){
		return this.bugStorage.getAll();
	}
}