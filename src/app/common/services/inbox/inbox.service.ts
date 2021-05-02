import { environment } from "./../../../../environments/environment.prod";
import { Injectable } from "@angular/core";

import { HttpClient } from "@angular/common/http";

import { Message } from "./../../models/message.model";

@Injectable({
	providedIn: "root",
})
export class InboxService {
	unreadMessagesList: Array<Message>;
	readMessagesList: Array<Message>;

	constructor(private http: HttpClient) {
		this.unreadMessagesList = [];
		this.readMessagesList = [];
	}

	getAllMessages() {
		return this.http.get(
			`${environment.API_URL}/api/admin/manage.php?action=messages`
		);
	}

	switchReadUnread(payload: any) {
		return this.http.post(
			`${environment.API_URL}/api/admin/manage.php?action=messages`,
			payload
		);
	}
}
