import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { VisitorsComponent } from './visitors/visitors.component';
import { MessagesComponent } from './messages/messages.component';

const routes: Routes = [
	{
		path: '',
		component: VisitorsComponent,
	},
	{
		path: 'visitors',
		component: VisitorsComponent,
	},
	{
		path: 'messages',
		component: MessagesComponent,
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
