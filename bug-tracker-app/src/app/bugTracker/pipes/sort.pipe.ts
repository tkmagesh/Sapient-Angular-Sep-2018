import { Pipe, PipeTransform } from '@angular/core';

interface IComparer{
	(item1 : any, item2 : any) : number
}

@Pipe({
	name : 'sort',
	pure : true
})
export class SortPipe implements PipeTransform{
	constructor(){
		console.log('sort pipe instance created');
	}
	private getDescComparerFor(comparer : IComparer) : IComparer{
		return function(item1 : any, item2 : any) : number {
			return comparer(item1, item2) * -1;;
		}
	}
	private getComparerFor(attrName:string) : IComparer {
		return function(item1 : any , item2 : any) : number {
			if (item1[attrName] < item2[attrName]) return -1;
			if (item1[attrName] > item2[attrName]) return 1;
			return 0;
		}
	}
	transform(list : any[], attrName : string, isDesc : boolean = false) : any[] {
		console.log('list transformed by sort pipe');
		if (!list || !list.length || !attrName) return list;
		let comparer = this.getComparerFor(attrName);
		if (isDesc)
			comparer = this.getDescComparerFor(comparer);
		return list.sort(comparer);
	}
}