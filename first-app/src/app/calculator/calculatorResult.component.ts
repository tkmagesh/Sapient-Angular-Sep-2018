import { Component, Input, OnChanges, DoCheck } from '@angular/core';

@Component({
	selector : 'app-calculator-result',
	templateUrl : 'calculatorResult.component.html',
	styleUrls : ['calculatorResult.component.css']
})
export class CalculatorResultComponent implements OnChanges{

	@Input()
	data : number = 0;


	resultStyle = {positive : this.data >= 0, negative : this.data < 0};



	ngOnChanges(){
		this.resultStyle = {positive : this.data >= 0, negative : this.data < 0};
	}

}