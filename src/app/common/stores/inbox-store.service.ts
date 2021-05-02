//import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { filter, map, tap } from "rxjs/operators";

import { InboxService } from "./../services/inbox/inbox.service";

import { Message } from "./../models/message.model";

export class InboxStore {
	private inboxSubject = new BehaviorSubject<Message[]>([]);

	inbox$: Observable<Message[]> = this.inboxSubject.asObservable();

	constructor(private InboxService: InboxService) {
		this.getMessages();
	}

	getMessages() {
		this.InboxService.getAllMessages().subscribe((res: any) => {
			if (!res.complete) {
				return;
			}

			this.inboxSubject.next(res.result.all);
		});
	}

	getReadMessages() {
		return this.filterByReadStatus();
	}

	getUnreadMessages() {
		return this.filterByReadStatus(false);
	}

	filterByReadStatus(readStatus: boolean = true) {
		return this.inbox$.pipe(
			map((messagesList) =>
				messagesList.filter((msg) => msg.mRead == readStatus)
			)
		);
	}
}
