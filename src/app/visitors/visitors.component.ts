import { Component, OnInit } from "@angular/core";

import { VisitorStore } from "../common/stores/visitor.store";

import { Visitor } from "./../common/models/visitor.model";
import { Chart } from "./../common/models/chart.model";

@Component({
	selector: "app-visitors",
	templateUrl: "./visitors.component.html",
	styleUrls: ["./visitors.component.scss"],
})
export class VisitorsComponent implements OnInit {
	chartData!: Chart[];
	visitorsList!: Visitor[];

	constructor(private VisitorStore: VisitorStore) {}

	ngOnInit(): void {
		this.VisitorStore.chart$.subscribe((chartData: Chart[]) => {
			this.chartData = chartData;
		});

		this.VisitorStore.visitors$.subscribe((visitorsList: Visitor[]) => {
			console.log("this.VisitorStore.visitors$.subscribe");
			console.log(visitorsList);
			this.visitorsList = visitorsList;
		});
	}
}
