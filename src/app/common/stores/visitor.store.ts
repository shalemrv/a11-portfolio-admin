import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { filter, map, tap } from "rxjs/operators";

import { VisitorService } from "../services/visitors/visitor.service";

import { Chart } from "../models/chart.model";
import { Visitor } from "../models/visitor.model";
import { ThisReceiver } from "@angular/compiler";
@Injectable({
	providedIn: "root",
})
export class VisitorStore {
	private chartSubject = new BehaviorSubject<Chart[]>([]);
	private visitorSubject = new BehaviorSubject<Visitor[]>([]);

	chart$: Observable<Chart[]> = this.chartSubject.asObservable();
	visitors$: Observable<Visitor[]> = this.visitorSubject.asObservable();

	constructor(private VisitorService: VisitorService) {}

	init() {
		console.log("Visitors Store Initialized");
		this.getVisitorsData();
	}

	getVisitorsData() {
		this.VisitorService.getVisitorsData().subscribe((res: any) => {
			if (!res.complete) {
				this.chartSubject.next([]);
				this.visitorSubject.next([]);
				return;
			}

			let chartData = res.result.chart;
			let visitorsList = res.result.list;

			visitorsList.forEach((vDetails: Visitor) => {
				vDetails.entryTime = new Date(vDetails.entryTime);
			});

			this.chartSubject.next(chartData);
			this.visitorSubject.next(visitorsList);
		});
	}
}
