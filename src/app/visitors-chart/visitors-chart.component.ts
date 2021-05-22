import { Component, Input, OnChanges, ChangeDetectorRef } from "@angular/core";
//import { NgxChartsModule } from "@swimlane/ngx-charts";

import { Chart } from "./../common/models/chart.model";

@Component({
	selector: "app-visitors-chart",
	templateUrl: "./visitors-chart.component.html",
	styleUrls: ["./visitors-chart.component.scss"],
})
export class VisitorsChartComponent implements OnChanges {
	@Input() chartData!: Chart[];

	view: [number, number] = [600, 400];

	// options
	legend: boolean = true;
	showLabels: boolean = true;
	animations: boolean = true;
	xAxis: boolean = true;
	yAxis: boolean = true;
	showYAxisLabel: boolean = true;
	showXAxisLabel: boolean = true;
	legendTitle: string = "";
	xAxisLabel: string = "Date";
	yAxisLabel: string = "Visits";
	timeline: boolean = true;

	colorScheme = {
		domain: [
			"#9c27b0",
			"#5AA454",
			"#E44D25",
			"#110DFF",
			"#7AA3E5",
			"#A8385D",
			"#AAE3F5",
		],
	};

	constructor(private cd: ChangeDetectorRef) {}

	ngOnChanges() {
		this.cd.detectChanges();
	}
}
