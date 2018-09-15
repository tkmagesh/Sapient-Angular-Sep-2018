import { Bug } from '../models/Bug';
import { IBugOperations } from '../contracts/IBugOperations';

export class BugOperationsService implements IBugOperations {
	
	createNew(newBugName : string ) : Bug {
		let newBug : Bug = {
			name : newBugName,
			isClosed : false
		};
		return newBug;
	}

	toggle(bugToToggle : Bug) : void {
		bugToToggle.isClosed = !bugToToggle.isClosed;
	}
}