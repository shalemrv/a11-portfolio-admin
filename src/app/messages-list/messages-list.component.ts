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

import { Message } from "./../common/models/message.model";

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

	displayedColumns: string[] = ["id", "dateTime", "companyName"];
	messagesDataSource!: MatTableDataSource<Message>;

	@ViewChild(MatSort) sort!: MatSort;
	@ViewChild(MatPaginator) paginator!: MatPaginator;

	constructor(private cd: ChangeDetectorRef) {}

	instantiateTableDataSource() {
		this.messagesDataSource = new MatTableDataSource<Message>(
			this.messagesList
		);
		this.messagesDataSource.paginator = this.paginator;
		this.messagesDataSource.sort = this.sort;
		this.messagesCount = this.messagesList.length;
	}

	ngOnChanges() {
		this.instantiateTableDataSource();
		this.cd.detectChanges();
	}
}
