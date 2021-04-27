import { environment } from './../../../environments/environment.prod';
import { Injectable } from '@angular/core';

import { HttpInterceptor } from '@angular/common/http';

@Injectable({
	providedIn: 'root',
})
export class InterceptorService implements HttpInterceptor {
	constructor() {}

	intercept(req: any, next: any) {
		let authorizedRequest = req.clone({
			setHeaders: {
				Authorization: `Bearer ${environment.API_KEY}`,
			},
		});

		return next.handle(authorizedRequest);
	}
}
