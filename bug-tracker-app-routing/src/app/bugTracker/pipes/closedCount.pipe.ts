import { Pipe, PipeTransform } from '@angular/core';
import { Bug } from '../models/Bug';

@Pipe({
	name: 'closedCount'
})
export class ClosedCountPipe implements PipeTransform {
	transform(data: Bug[], args: any[]): number {
		return data.reduce((result, bug) => bug.isClosed ? ++result : result, 0);
	}
}