import { environment } from "./../../../../environments/environment.prod";
import { Injectable } from "@angular/core";

import { HttpClient } from "@angular/common/http";

@Injectable({
	providedIn: "root",
})
export class AuthService {
	constructor(private http: HttpClient) {}

	checkIfLoggedIn() {
		return this.http.get(
			`${environment.API_URL}/api/admin/authenticate.php?action=check`
		);
	}

	login(payload: any) {
		return this.http.post(
			`${environment.API_URL}/api/admin/authenticate.php?action=login`,
			payload
		);
	}

	logout() {
		return this.http.get(
			`${environment.API_URL}/api/admin/authenticate.php?action=logout`
		);
	}
}
