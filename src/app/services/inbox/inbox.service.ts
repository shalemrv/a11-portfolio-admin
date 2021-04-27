import { environment } from "./../../../environments/environment.prod";
import { Injectable } from "@angular/core";

import { HttpClient } from "@angular/common/http";

import { Message } from "./../../../models/message.model";

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
		let subscription = this.http.get(
			`${environment.API_URL}/api/admin/manage.php?action=messages`
		);

		subscription.subscribe((res) => {
			console.log(res);
		});
	}
}
