import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "./../../../../environments/environment.prod";

@Injectable({
	providedIn: "root",
})
export class VisitorService {
	constructor(private http: HttpClient) {}

	getVisitorsData() {
		return this.http.get(
			`${environment.API_URL}/api/admin/manage.php?action=visitors`
		);
	}
}
