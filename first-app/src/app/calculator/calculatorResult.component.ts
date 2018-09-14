import { Component, Input } from '@angular/core';

@Component({
	selector : 'app-calculator-result',
	templateUrl : 'calculatorResult.component.html',
	styleUrls : ['calculatorResult.component.css']
})
export class CalculatorResultComponent{

	@Input()
	data : number = 0;

}