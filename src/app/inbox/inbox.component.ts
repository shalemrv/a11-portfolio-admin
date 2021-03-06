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
	//readMessages!: Message[];
	//unreadMessages!: Message[];

	readMessages$!: Observable<Message[]>;
	unreadMessages$!: Observable<Message[]>;

	constructor(private InboxStore: InboxStore) {
		//this.InboxStore.inbox$.subscribe((messagesList: Message[]) => {
		//	console.log("this.InboxStore.inbox$.subscribe");
		//	console.log(messagesList);
		//	this.unreadMessages = messagesList.filter((msg) => !msg.mRead);
		//	this.readMessages = messagesList.filter((msg) => msg.mRead);
		//});
		this.readMessages$ = this.InboxStore.getReadMessages();
		this.unreadMessages$ = this.InboxStore.getUnreadMessages();
	}

	ngOnInit() {
		this.reloadMessages();
	}

	reloadMessages() {
		this.InboxStore.getMessages();
	}
}
