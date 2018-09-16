import { Injectable } from '@angular/core';
import { Bug } from '../models/Bug';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
	providedIn : 'root'
})
export class BugApiService{
	
	private baseUrl = 'http://localhost:3000/bugs';

	constructor(private httpClient : HttpClient){

	}

	getAll() : Observable<Bug[]>{
		return this.httpClient
			.get<Bug[]>(this.baseUrl);

	}

	save(bugData : Bug) : Observable<Bug>{
		if (bugData.id === 0){
			return this.httpClient
				.post<Bug>(this.baseUrl, bugData);
		} else {
			return this.httpClient
				.put<Bug>(`${this.baseUrl}/${bugData.id}`, bugData);
		}
	}

	remove(bugData : Bug) : Observable<any>{
		return this.httpClient
				.delete(`${this.baseUrl}/${bugData.id}`);
	}
}