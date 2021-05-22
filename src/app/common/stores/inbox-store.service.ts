import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { filter, map, tap } from "rxjs/operators";

import { InboxService } from "./../services/inbox/inbox.service";

import { Message } from "./../models/message.model";
import { ThisReceiver } from "@angular/compiler";
@Injectable({
	providedIn: "root",
})
export class InboxStore {
	private inboxSubject = new BehaviorSubject<Message[]>(DUMMY_MESSAGES);

	inbox$: Observable<Message[]> = this.inboxSubject.asObservable();

	constructor(private InboxService: InboxService) {}

	init() {
		console.log("Inbox Store Initialized");
		this.getMessages();
	}

	getMessages() {
		this.InboxService.getAllMessages().subscribe((res: any) => {
			if (!res.complete) {
				this.inboxSubject.next(DUMMY_MESSAGES);
				return;
			}

			setTimeout(() => {
				console.log("WILL EMIT ALL MESSAGES");
				console.log(res.result.all);
				this.inboxSubject.next(res.result.all);
			}, 3000);
		});
	}

	getReadMessages() {
		return this.filterByReadStatus(true);
	}

	getUnreadMessages() {
		return this.filterByReadStatus(false);
	}

	filterByReadStatus(readStatus: boolean) {
		return this.inbox$.pipe(
			map((messagesList) =>
				messagesList.filter((msg) => msg.mRead == readStatus)
			)
		);
	}
}

const DUMMY_MESSAGES = [
	{
		id: 5,
		dateTime: "2020-08-06 16:16:16",
		mDate: "2020-08-06",
		mTime: "16:16:16",
		companyName: "Shalem Corp",
		fullName: "Shalem V R",
		email: "shalem@gmail.com",
		message: "This is Shalem. Please get in touch",
		ipAddress: "",
		ipLocation: "",
		response: "",
		mRead: false,
	},
	{
		id: 6,
		dateTime: "2020-08-05 16:16:16",
		mDate: "2020-08-05",
		mTime: "16:16:16",
		companyName: "Rathna Corp",
		fullName: "Rathna V R",
		email: "rathna@gmail.com",
		message: "This is Rathna. Please get in touch",
		ipAddress: "",
		ipLocation: "",
		response: "",
		mRead: false,
	},
	{
		id: 7,
		dateTime: "2020-08-04 16:16:16",
		mDate: "2020-08-04",
		mTime: "16:16:16",
		companyName: "Raj Corp",
		fullName: "Raj V R",
		email: "raj@gmail.com",
		message: "This is Raj. Please get in touch",
		ipAddress: "",
		ipLocation: "",
		response: "",
		mRead: false,
	},
	{
		id: 8,
		dateTime: "2020-08-03 16:16:16",
		mDate: "2020-08-03",
		mTime: "16:16:16",
		companyName: "Mike Corp",
		fullName: "Mike V R",
		email: "mike@gmail.com",
		message: "This is Mike. Please get in touch",
		ipAddress: "",
		ipLocation: "",
		response: "",
		mRead: false,
	},
	{
		id: 9,
		dateTime: "2020-08-02 16:16:16",
		mDate: "2020-08-02",
		mTime: "16:16:16",
		companyName: "Paul Corp",
		fullName: "Paul V R",
		email: "paul@gmail.com",
		message: "This is Paul. Please get in touch",
		ipAddress: "",
		ipLocation: "",
		response: "",
		mRead: true,
	},
	{
		id: 10,
		dateTime: "2020-08-01 16:16:16",
		mDate: "2020-08-01",
		mTime: "16:16:16",
		companyName: "Tim Corp",
		fullName: "Tim V R",
		email: "tim@gmail.com",
		message: "This is Tim. Please get in touch",
		ipAddress: "",
		ipLocation: "",
		response: "",
		mRead: true,
	},
];
