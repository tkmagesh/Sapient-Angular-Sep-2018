import { Injectable } from '@angular/core';
import { CalculatorService } from './calculatorService';

@Injectable({
	providedIn : 'root'
})
export class CalculatorModel{
	n1 : number = 0;
	n2 : number = 0;
	result : number = 0;

	constructor(private caculatorService : CalculatorService){

	}

	add(){
		this.caculatorService.addOperation('+', this.n1, this.n2);
		this.result = this.n1 + this.n2;
	}

	subtract(){
		this.caculatorService.addOperation('-', this.n1, this.n2);
		this.result = this.n1 - this.n2;
	}

	multiply(){
		this.caculatorService.addOperation('*', this.n1, this.n2);
		this.result = this.n1 * this.n2;
	}

	divide(){
		this.caculatorService.addOperation('/', this.n1, this.n2);
		this.result = this.n1 / this.n2;
	}
}