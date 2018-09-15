import { Bug } from '../models/Bug';

export interface IBugOperations {
	createNew(newBugName : string ) : Bug,
	toggle(bugToToggle : Bug) : void
}