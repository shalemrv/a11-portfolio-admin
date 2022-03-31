import { Component, OnInit } from "@angular/core";
import { AuthStore } from "./common/stores/auth.store";
import { InboxStore } from "./common/stores/inbox.store";
import { VisitorStore } from "./common/stores/visitor.store";
@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
	title = "a11-portfolio-admin";

	constructor(
		public AuthStore: AuthStore,
		public InboxStore: InboxStore,
		public VisitorStore: VisitorStore
	) {}

	ngOnInit() {
		this.AuthStore.init();
		this.InboxStore.init();
		this.VisitorStore.init();

		this.AuthStore.loggedIn$.subscribe((loggedIn: boolean) => {
			if (!loggedIn) {
				return;
			}

			this.reloadAllData();
		});
	}

	reloadAllData() {
		this.InboxStore.getMessages();
		this.VisitorStore.getVisitorsData();
	}
}
