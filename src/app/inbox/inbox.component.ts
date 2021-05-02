import { Component, OnInit } from "@angular/core";

import { Observable } from "rxjs";

import { InboxStore } from "./../common/stores/inbox-store.service";

import { Message } from "./../common/models/message.model";

@Component({
	selector: "app-inbox",
	templateUrl: "./inbox.component.html",
	styleUrls: ["./inbox.component.scss"],
})
export class InboxComponent implements OnInit {
	readMessages$!: Observable<Message[]>;
	unreadMessages$!: Observable<Message[]>;

	constructor(private InboxStore: InboxStore) {}

	ngOnInit() {
		this.readMessages$ = this.InboxStore.getReadMessages();
		this.unreadMessages$ = this.InboxStore.getUnreadMessages();
	}
}

const ARRAY_MESSAGES = [
	{
		id: 12,
		dateTime: "2021-04-07 07:00:32",
		mDate: "2021-04-07",
		mTime: "07:00:32",
		companyName: "Testtest",
		fullName: "Shalem Raj",
		email: "rshalemraj@gmail.com",
		message: "This is only for testing ",
		ipAddress: "",
		ipLocation: "",
		response: "Yet to respond",
		mRead: true,
	},
	{
		id: 11,
		dateTime: "2021-02-18 09:00:42",
		mDate: "2021-02-18",
		mTime: "09:00:42",
		companyName: "DART INFO SERVICES",
		fullName: "Ashwin",
		email: "bavaliyaashwin@gmail.com",
		message:
			"Hi This Ashwin please share your resume to given email address",
		ipAddress: "",
		ipLocation: "",
		response: "Yet to respond",
		mRead: true,
	},
	{
		id: 10,
		dateTime: "2021-02-13 16:41:06",
		mDate: "2021-02-13",
		mTime: "16:41:06",
		companyName: "TestFeb1 dfgdg",
		fullName: "Shalem Raj",
		email: "vsr@gmail.com",
		message: "This is a test message",
		ipAddress: "",
		ipLocation: "",
		response: "Yet to respond",
		mRead: true,
	},
	{
		id: 9,
		dateTime: "2020-12-04 04:38:42",
		mDate: "2020-12-04",
		mTime: "04:38:42",
		companyName: "Hhjk jklllbllll",
		fullName: "Jjjk",
		email: "ravijaraveendran@gmail.com",
		message: "Hiiiii bjjoooo jhttuuijhhjjh jhrrhjul hjjbgfvnjj",
		ipAddress: "",
		ipLocation: "",
		response: "Yet to respond",
		mRead: true,
	},
	{
		id: 8,
		dateTime: "2020-11-30 07:59:24",
		mDate: "2020-11-30",
		mTime: "07:59:24",
		companyName: "TestCompany",
		fullName: "Shalem Raj",
		email: "shalemraj@test.com",
		message: "Hi this is test message ",
		ipAddress: "",
		ipLocation: "",
		response: "Yet to respond",
		mRead: true,
	},
	{
		id: 7,
		dateTime: "2020-11-12 20:17:12",
		mDate: "2020-11-12",
		mTime: "20:17:12",
		companyName: "Brown, Roberts and Hermann",
		fullName: "Elna Mann",
		email: "ckosinski25@gmail.com",
		message: "web-enabled",
		ipAddress: "",
		ipLocation: "",
		response: "Yet to respond",
		mRead: true,
	},
	{
		id: 6,
		dateTime: "2020-11-12 20:17:10",
		mDate: "2020-11-12",
		mTime: "20:17:10",
		companyName: "Brown, Roberts and Hermann",
		fullName: "Elna Mann",
		email: "ckosinski25@gmail.com",
		message: "web-enabled",
		ipAddress: "",
		ipLocation: "",
		response: "Yet to respond",
		mRead: true,
	},
	{
		id: 5,
		dateTime: "2020-11-04 21:35:20",
		mDate: "2020-11-04",
		mTime: "21:35:20",
		companyName: "Fritsch - Hickle",
		fullName: "Herminia Gleichner",
		email: "mjwagner@comcast.net",
		message: "multi-byte",
		ipAddress: "",
		ipLocation: "",
		response: "Yet to respond",
		mRead: true,
	},
	{
		id: 4,
		dateTime: "2020-08-25 00:25:08",
		mDate: "2020-08-25",
		mTime: "00:25:08",
		companyName: "Testing Mate",
		fullName: "Raj VSR",
		email: "rajvsr@gm.com",
		message: "Hi! \n\nThis is a Test Message",
		ipAddress: "",
		ipLocation: "",
		response: "Yet to respond",
		mRead: true,
	},
	{
		id: 3,
		dateTime: "2020-08-11 07:05:52",
		mDate: "2020-08-11",
		mTime: "07:05:52",
		companyName: "Ammu Corp",
		fullName: "Nainika Mool",
		email: "nainikarsn@gmail.com",
		message: "Hi Ammavu.\nPlease get in touch.\nThank you",
		ipAddress: "",
		ipLocation: "",
		response: "Yet to respond",
		mRead: true,
	},
	{
		id: 1,
		dateTime: "2020-08-06 00:00:00",
		mDate: "2020-08-06",
		mTime: "00:00:00",
		companyName: "Ammu Corp",
		fullName: "Ammu Nainika",
		email: "nainika_rsn@gmail.com",
		message: "Hi Ammavu,\r\nThis is Ammu\r\n\r\nHave a nice day!",
		ipAddress: "",
		ipLocation: "",
		response: "Yet to respond",
		mRead: true,
	},
];
