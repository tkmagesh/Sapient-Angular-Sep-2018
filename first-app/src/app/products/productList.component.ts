import { Component } from '@angular/core';

@Component({
	selector : 'app-products',
	template : `
		<h1>Products</h1>
		<hr>
		<div> [ {{ list.length }} ] </div>
		<label for="">Product Name :</label>
		<input type="text" #newProductName>
		<input type="button" value="Add New" (click)="onAddNewClick(newProductName.value)">
		<ol>
			<li *ngFor="let item of list">{{item}}</li>
			
		</ol>
	`
})
export class ProductListComponent{

	list : Array<string> = [];

	onAddNewClick(newProductName){
		this.list.push(newProductName);
	}

}