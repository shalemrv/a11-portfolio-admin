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

import { Visitor } from "./../common/models/visitor.model";

@Component({
	selector: "app-visitors-list",
	templateUrl: "./visitors-list.component.html",
	styleUrls: ["./visitors-list.component.scss"],
})
export class VisitorsListComponent implements OnChanges {
	@Input() vistorsList!: Visitor[];
	visitorsListCount!: number;

	displayedColumns: string[] = ["slNo", "ipAddress", "entryTime", "address"];
	dataSource!: MatTableDataSource<Visitor>;

	@ViewChild(MatSort) sort!: MatSort;
	@ViewChild(MatPaginator) paginator!: MatPaginator;

	constructor(private cd: ChangeDetectorRef) {}

	instantiateTableDataSource() {
		this.dataSource = new MatTableDataSource<Visitor>(this.vistorsList);
		this.dataSource.paginator = this.paginator;
		this.dataSource.sort = this.sort;
		this.visitorsListCount = this.vistorsList.length;
	}

	ngOnChanges() {
		this.instantiateTableDataSource();
		this.cd.detectChanges();
	}
}
