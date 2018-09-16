import { Component, DoCheck, OnChanges } from '@angular/core';
import { CalculatorService } from './calculatorService';


@Component({
	selector : 'app-calculator-summary',
	template : `
		<h3>Operation Count : {{opCount}}</h3>
	`
})
export class CalculatorSummaryComponent implements DoCheck, OnChanges{
	opCount = -100;

	constructor(private calculatorService : CalculatorService){
		
	}

	ngOnChanges(){
		this.opCount = this.calculatorService.getOperationsCount();
	}

	ngDoCheck(){
		this.opCount = this.calculatorService.getOperationsCount();
	}
}