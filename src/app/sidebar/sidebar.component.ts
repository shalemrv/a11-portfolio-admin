import { Component, OnInit } from "@angular/core";
import { VisitorStore } from "../common/stores/visitor.store";

import { Visitor } from "./../common/models/visitor.model";

@Component({
	selector: "app-sidebar",
	templateUrl: "./sidebar.component.html",
	styleUrls: ["./sidebar.component.scss"],
})
export class SidebarComponent implements OnInit {
	visitorsCount!: number;

	constructor(private VisitorStore: VisitorStore) {}

	ngOnInit(): void {
		this.VisitorStore.visitors$.subscribe((visitorsList: Visitor[]) => {
			console.log("this.VisitorStore.visitors$.subscribe");
			console.log(visitorsList);
			this.visitorsCount = visitorsList.length;
		});
	}
}
