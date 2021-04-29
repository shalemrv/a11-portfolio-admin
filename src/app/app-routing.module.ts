import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { VisitorsComponent } from "./visitors/visitors.component";
import { InboxComponent } from "./inbox/inbox.component";
import { LoginComponent } from "./login/login.component";

const routes: Routes = [
	{
		path: "",
		component: VisitorsComponent,
	},
	{
		path: "visitors",
		component: VisitorsComponent,
	},
	{
		path: "messages",
		component: InboxComponent,
	},
	{
		path: "login",
		component: LoginComponent,
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
