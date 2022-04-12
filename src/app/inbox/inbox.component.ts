import { Component, OnInit } from "@angular/core";

import { Observable } from "rxjs";

import { InboxStore } from "../common/stores/inbox.store";

import { Message } from "./../common/models/message.model";

@Component({
	selector: "app-inbox",
	templateUrl: "./inbox.component.html",
	styleUrls: ["./inbox.component.scss"],
	providers: [InboxStore],
})
export class InboxComponent implements OnInit {
	readMessages!: Message[];
	unreadMessages!: Message[];

	constructor(private InboxStore: InboxStore) {
		// this.readMessages$ = this.InboxStore.getReadMessages();
		// this.unreadMessages$ = this.InboxStore.getUnreadMessages();
	}

	ngOnInit() {
		this.reloadMessages();

		this.InboxStore.inbox$.subscribe((inbox: Message[]) => {
			console.log("this.InboxStore.inbox$.subscribe");
			console.log(inbox);
			this.readMessages = this.InboxStore.getReadMessages(inbox);
			this.unreadMessages = this.InboxStore.getUnreadMessages(inbox);
		});
	}

	reloadMessages() {
		this.InboxStore.getMessages();
	}
}
