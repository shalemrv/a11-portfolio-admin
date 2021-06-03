import { Component, OnInit } from "@angular/core";

import { InboxService } from "./../common/services/inbox/inbox.service";

import { Message } from "./../common/models/message.model";

@Component({
	selector: "app-view-message-dialog",
	templateUrl: "./view-message-dialog.component.html",
	styleUrls: ["./view-message-dialog.component.scss"],
})
export class ViewMessageDialogComponent implements OnInit {
	constructor(public InboxService: InboxService) {}

	ngOnInit(): void {}
}
