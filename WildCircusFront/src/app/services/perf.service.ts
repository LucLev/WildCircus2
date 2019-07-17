import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Perf } from '../performance';

@Injectable({
	providedIn: 'root'
})
export class PerfService {
	private client: HttpClient;
	private baseUrl: string;

	constructor(http: HttpClient) {
		this.client = http;
		this.baseUrl = environment.domain;
	}

	public getAllPerf(): Observable<Perf[]> {
		return this.client.get<Perf[]>(this.baseUrl + '/event/all');
	}

	public createPerf(perf: Perf): Observable<Perf> {
		return this.client.post(this.baseUrl + '/event', perf).pipe(
			map((param_response: HttpResponse<any>) => {
				return param_response.body as Perf;
			})
		);
	}

	public updatePerf(id: number, value: any): Observable<Object> {
		return this.client.put(this.baseUrl + '/' + id, value);
	}


}

