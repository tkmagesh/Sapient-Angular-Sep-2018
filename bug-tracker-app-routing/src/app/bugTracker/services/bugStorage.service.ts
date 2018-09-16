import { Bug } from '../models/Bug'

export class BugStorageService{
	private storage = window.localStorage;
	private currentBugId = 0;

	save(bugData : Bug) : Bug {
		if (bugData.id === 0){
			bugData.id = ++this.currentBugId;
		}
		this.storage.setItem(bugData.id.toString(), JSON.stringify(bugData));
		return bugData;
	}

	remove(bugData : Bug){
		this.storage.removeItem(bugData.id.toString());
	}

	getAll() : Bug[]{
		let result = [];
		for(let index = 0, count = this.storage.length; index < count; index++){
			let key = this.storage.key(index),
				rawData = this.storage.getItem(key),
				bug = JSON.parse(rawData);
			result.push(bug);
			this.currentBugId = this.currentBugId > bug.id ? this.currentBugId : bug.id;
		}
		return result;
	}
}