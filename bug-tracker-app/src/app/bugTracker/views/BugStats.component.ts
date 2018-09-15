import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Bug } from '../models/Bug';

@Component({
	selector : 'app-bug-stats',
	template : `
		<section class="stats">
			<span class="closed">{{getClosedCount()}}</span>
			<span> / </span>
			<span>{{bugs.length}}</span>
			<input type="text" (keyup)="doSomething()"/>
		</section>
		<div>{{getCurrentTime()}}</div>
	`,
	changeDetection : ChangeDetectionStrategy.OnPush
})
export class BugStatsComponent{

	@Input()
	bugs : Bug[] = [];

	doSomething(){

	}

	getCurrentTime(){
		return Date();
	}
	getClosedCount(){
		console.log('getClosedCount triggered');
		return this.bugs.reduce((result, bug) => bug.isClosed ? ++result : result, 0);
	}
}