import { Component } from '@angular/core';
import { CalculatorModel } from './CalculatorModel';

@Component({
	selector : 'app-calculator-1',
	templateUrl : 'calculatorOne.component.html',
	styleUrls : ['calculatorOne.component.css']
})
export class CalculatorOneComponent{

	model : CalculatorModel = new CalculatorModel();
	
}