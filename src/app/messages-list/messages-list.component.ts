import {
	Component,
	Input,
	ViewChild,
	AfterViewInit,
	ChangeDetectorRef,
} from "@angular/core";

import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";

import { Message } from "./../common/models/message.model";

@Component({
	selector: "app-messages-list",
	templateUrl: "./messages-list.component.html",
	styleUrls: ["./messages-list.component.scss"],
})
export class MessagesListComponent implements AfterViewInit {
	@Input() messagesList!: Array<Message>;
	@Input() type!: string;

	messagesCount!: number;
	allMessages!: Array<Message>;

	displayedColumns: string[] = ["id", "dateTime", "companyName"];
	messagesDataSource!: MatTableDataSource<Message>;

	@ViewChild(MatSort) sort!: MatSort;
	@ViewChild(MatPaginator) paginator!: MatPaginator;

	constructor(
		private cd: ChangeDetectorRef,
		private InboxStore: InboxStore
	) {}

	instantiateTableDataSource() {
		this.messagesDataSource = new MatTableDataSource<Message>(
			this.messagesList
		);
		this.messagesDataSource.paginator = this.paginator;
		this.messagesDataSource.sort = this.sort;
		this.messagesCount = this.messagesList.length;
	}

	ngAfterViewInit() {
		this.instantiateTableDataSource();
		this.cd.detectChanges();
	}
}
