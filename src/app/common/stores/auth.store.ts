import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

import { AuthService } from "../services/auth/auth.service";

@Injectable({
	providedIn: "root",
})
export class AuthStore {
	private loginSubject = new BehaviorSubject<boolean>(false);

	localLoggedIn: boolean = false;
	loggedIn$: Observable<boolean> = this.loginSubject.asObservable();

	constructor(private AuthService: AuthService) {}

	init() {
		console.log("Visitors Store Initialized");
		this.checkIfLoggedIn();
	}

	checkIfLoggedIn() {
		this.AuthService.checkIfLoggedIn().subscribe((res: any) => {
			if (!res.complete) {
				this.loginSubject.next(false);
				this.localLoggedIn = false;
				return;
			}

			console.log("CHECK LOGIN");
			console.log(res);

			this.loginSubject.next(true);
			this.localLoggedIn = true;
		});
	}

	login(credentials: any) {
		this.AuthService.login(credentials).subscribe((res: any) => {
			if (!res.complete) {
				this.loginSubject.next(false);
				this.localLoggedIn = false;
				return;
			}

			console.log("LOGIN");
			console.log(res);

			this.loginSubject.next(true);
			this.localLoggedIn = true;
		});
	}

	logout() {
		this.AuthService.logout().subscribe((res: any) => {
			if (!res.complete) {
				this.loginSubject.next(false);
				this.localLoggedIn = false;
				return;
			}

			console.log("LOGOUT");
			console.log(res);

			this.loginSubject.next(false);
			this.localLoggedIn = false;
		});
	}
}
