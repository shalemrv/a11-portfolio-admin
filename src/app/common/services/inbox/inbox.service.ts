import { environment } from "./../../../../environments/environment.prod";
import { Injectable } from "@angular/core";

import { Message } from "./../../models/message.model";

import { HttpClient } from "@angular/common/http";

@Injectable({
	providedIn: "root",
})
export class InboxService {
	selectedMessage!: Message;
	constructor(private http: HttpClient) {}

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

	setSelectedMessage(selectedMessage: Message) {
		this.selectedMessage = selectedMessage;
	}
}
