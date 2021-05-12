import { Component, OnInit } from "@angular/core";
import { InboxStore } from "./common/stores/inbox-store.service";
@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.scss"],
})
export class AppComponent {
	title = "a11-portfolio-admin";

	constructor(private InboxStore: InboxStore) {}

	ngOnInit() {
		this.InboxStore.init();
	}
}
