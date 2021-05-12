import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

export class HttpObservable {
	constructor(private http: HttpClient) {}

	createHttpObservableGET(url: string) {
		return Observable.create((observer: any) => {
			const controller = new AbortController();
			const signal = controller.signal;

			console.log(`${url}-signal`);
			console.log(signal);

			this.http.get(url).pipe(response);

			fetch(url, { signal })
				.then((response) => {
					if (response.ok) {
						return response.json();
					} else {
						observer.error(
							"Request failed with status code: " +
								response.status
						);
					}
				})
				.then((body) => {
					observer.next(body);

					observer.complete();
				})
				.catch((err) => {
					observer.error(err);
				});

			return () => controller.abort();
		});
	}
}
