import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';

/** MATERIAL IMPORTS */
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

/** NGX IMPORTS */
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { MessagesComponent } from './messages/messages.component';
import { VisitorsListComponent } from './visitors-list/visitors-list.component';
import { VisitorsChartComponent } from './visitors-chart/visitors-chart.component';
import { VisitorsComponent } from './visitors/visitors.component';

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		SidebarComponent,
		VisitorsComponent,
		MessagesComponent,
		VisitorsListComponent,
		VisitorsChartComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		MatMenuModule,
		MatIconModule,
		MatBadgeModule,
		MatTableModule,
		MatPaginatorModule,
		MatSortModule,
		NgxChartsModule,
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
