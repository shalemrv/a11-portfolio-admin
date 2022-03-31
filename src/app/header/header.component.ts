import { Component, Output, OnInit, EventEmitter } from "@angular/core";

import { AuthStore } from "../common/stores/auth.store";

/**
 * @title Header Component
 */
@Component({
	selector: "app-header",
	templateUrl: "./header.component.html",
	styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
	//loggedIn!: boolean;

	@Output() reloadEvent = new EventEmitter();

	triggerReload() {
		this.reloadEvent.emit();
	}

	constructor(public AuthStore: AuthStore) {}

	ngOnInit() {
		//this.AuthStore.loggedIn$.subscribe((loggedIn: boolean) => {
		//	console.log("this.AuthStore.loggedIn$.subscribe");
		//	console.log(loggedIn);
		//	this.loggedIn = loggedIn;
		//});
	}
}
