import { Injectable } from '@angular/core'

@Injectable({
	providedIn : 'root'
})
export class CalculatorService{
	private operations = [];

	addOperation(operand, n1, n2){
		this.operations.push(`${n1} ${operand} ${n2}`);
	}

	getOperationsCount(){
		return this.operations.length;
	}
}