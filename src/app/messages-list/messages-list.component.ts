import {
	Component,
	Input,
	ViewChild,
	OnChanges,
	ChangeDetectorRef,
} from "@angular/core";

import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";

import { InboxStore } from "../common/stores/inbox.store";
import { InboxService } from "./../common/services/inbox/inbox.service";

import { Message } from "./../common/models/message.model";
import { ViewMessageDialogComponent } from "../view-message-dialog/view-message-dialog.component";

@Component({
	selector: "messages-list",
	templateUrl: "./messages-list.component.html",
	styleUrls: ["./messages-list.component.scss"],
})
export class MessagesListComponent implements OnChanges {
	@Input() messagesList!: Message[];
	@Input() type!: string;

	messagesCount!: number;
	allMessages!: Message[];

	displayedColumns: string[] = ["date", "companyName", "fullName", "time"];
	messagesDataSource!: MatTableDataSource<Message>;

	@ViewChild(MatSort) sort!: MatSort;
	@ViewChild(MatPaginator) paginator!: MatPaginator;

	constructor(
		private cd: ChangeDetectorRef,
		private dialog: MatDialog,
		private InboxStore: InboxStore,
		private InboxService: InboxService
	) {}

	viewCompleteMessage(selectedMessage: Message) {
		console.log("viewCompleteMessage");
		console.log(selectedMessage);
		this.InboxService.setSelectedMessage(selectedMessage);
		this.dialog.open(ViewMessageDialogComponent);
	}

	instantiateTableDataSource() {
		this.messagesDataSource = new MatTableDataSource<Message>(
			this.messagesList
		);
		this.messagesDataSource.sort = this.sort;
		this.messagesCount = this.messagesList.length;

		setTimeout(() => {
			this.messagesDataSource.paginator = this.paginator;
		}, 500);
	}

	ngOnChanges() {
		this.instantiateTableDataSource();
		this.cd.detectChanges();
	}
}
