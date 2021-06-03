import {
	Component,
	Input,
	OnChanges,
	ViewChild,
	ChangeDetectorRef,
} from "@angular/core";

import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";

import { AuthStore } from "./../common/stores/auth-store.service";

import { Visitor } from "./../common/models/visitor.model";

@Component({
	selector: "app-visitors-list",
	templateUrl: "./visitors-list.component.html",
	styleUrls: ["./visitors-list.component.scss"],
})
export class VisitorsListComponent implements OnChanges {
	@Input() vistorsList!: Visitor[];
	visitorsListCount!: number;

	displayedColumns!: string[];
	dataSource!: MatTableDataSource<Visitor>;

	@ViewChild(MatSort) sort!: MatSort;
	@ViewChild(MatPaginator) paginator!: MatPaginator;

	constructor(private AuthStore: AuthStore, private cd: ChangeDetectorRef) {
		this.AuthStore.loggedIn$.subscribe((loggedIn) => {
			if (!loggedIn) {
				this.displayedColumns = ["slNo", "entryTime", "address"];
				return;
			}

			this.displayedColumns = [
				"slNo",
				"ipAddress",
				"entryTime",
				"address",
			];
		});
	}

	instantiateTableDataSource() {
		this.visitorsListCount = this.vistorsList.length;
		this.dataSource = new MatTableDataSource<Visitor>(this.vistorsList);
		this.dataSource.sort = this.sort;
		setTimeout(() => {
			this.dataSource.paginator = this.paginator;
		}, 500);
	}

	ngOnChanges() {
		this.instantiateTableDataSource();
		this.cd.detectChanges();
	}
}
