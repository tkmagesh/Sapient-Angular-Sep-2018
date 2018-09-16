import { Component, OnInit } from '@angular/core';
import { BugServerService } from '../services/bugServer.service';
import { Bug } from '../models/Bug';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector : 'bug-details',
	template : `
		<h3>{{bug?.name}}</h3>
		<hr />
		<p>{{bug?.desc}}</p>
		<div><b>{{bug?.isClosed}}</b></div>
		<a [routerLink]="['/bugs']">Show List</a>
	`
})
export class BugDetailsComponent implements OnInit{

	bug : Bug;

	
	constructor(private route: ActivatedRoute) { }
	ngOnInit() {
		this.bug = this.route.snapshot.data['bugs'];
	} 

	/*ngOnInit(){
		console.dir(this.route.params);

		this.route.params
			.subscribe(param => this.bugServer.get(param.id)
				.subscribe(bug => this.bug = bug));
	}
	constructor(private route: ActivatedRoute, private bugServer : BugServerService){

	}*/

}
