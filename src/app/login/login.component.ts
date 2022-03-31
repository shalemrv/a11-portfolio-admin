import { Component, OnInit } from "@angular/core";

import { AuthStore } from "../common/stores/auth.store";

@Component({
	selector: "app-login",
	templateUrl: "./login.component.html",
	styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
	constructor(private AuthStore: AuthStore) {}

	ngOnInit(): void {}

	login(username: string, password: string) {
		console.log("Login");
		console.log(username, password);
		this.AuthStore.login({ username, password });
	}
}
