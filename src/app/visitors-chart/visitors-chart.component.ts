import { Component, OnInit } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@Component({
	selector: 'app-visitors-chart',
	templateUrl: './visitors-chart.component.html',
	styleUrls: ['./visitors-chart.component.scss'],
})
export class VisitorsChartComponent implements OnInit {
	chartData!: any[];
	view: [number, number] = [600, 400];

	// options
	legend: boolean = true;
	showLabels: boolean = true;
	animations: boolean = true;
	xAxis: boolean = true;
	yAxis: boolean = true;
	showYAxisLabel: boolean = true;
	showXAxisLabel: boolean = true;
	legendTitle: string = '';
	xAxisLabel: string = 'Date';
	yAxisLabel: string = 'Visits';
	timeline: boolean = true;

	colorScheme = {
		domain: [
			'#9c27b0',
			'#5AA454',
			'#E44D25',
			'#CFC0BB',
			'#7AA3E5',
			'#A8385D',
			'#AAE3F5',
		],
	};

	constructor() {
		this.chartData = [
			{
				name: '2021',
				series: [
					{ name: '23 Feb 2021', value: 4 },
					{ name: '25 Feb 2021', value: 5 },
					{ name: '26 Feb 2021', value: 2 },
					{ name: '01 Mar 2021', value: 5 },
					{ name: '03 Mar 2021', value: 1 },
					{ name: '04 Mar 2021', value: 6 },
					{ name: '06 Mar 2021', value: 2 },
					{ name: '23 Mar 2021', value: 5 },
					{ name: '25 Mar 2021', value: 1 },
					{ name: '26 Mar 2021', value: 2 },
					{ name: '16 Apr 2021', value: 1 },
					{ name: '17 Apr 2021', value: 2 },
					{ name: '18 Apr 2021', value: 10 },
				],
			},
		];
	}

	ngOnInit(): void {}
}
