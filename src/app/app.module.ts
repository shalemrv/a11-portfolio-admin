import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";

import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

import { AuthStore } from "./common/stores/auth.store";
import { InboxStore } from "./common/stores/inbox.store";
import { VisitorStore } from "./common/stores/visitor.store";

import { AppRoutingModule } from "./app-routing.module";

/** MATERIAL IMPORTS */
import { MatMenuModule } from "@angular/material/menu";
import { MatIconModule } from "@angular/material/icon";
import { MatBadgeModule } from "@angular/material/badge";
import { MatTableModule } from "@angular/material/table";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatSortModule } from "@angular/material/sort";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatDialogModule } from "@angular/material/dialog";

/** NGX IMPORTS */
import { NgxChartsModule } from "@swimlane/ngx-charts";

/**APP SERVICES */
import { InterceptorService } from "./common/services/interceptor/interceptor.service";

/** APP COMPOMENTS */
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HeaderComponent } from "./header/header.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { VisitorsListComponent } from "./visitors-list/visitors-list.component";
import { VisitorsChartComponent } from "./visitors-chart/visitors-chart.component";
import { VisitorsComponent } from "./visitors/visitors.component";
import { InboxComponent } from "./inbox/inbox.component";
import { MessagesListComponent } from "./messages-list/messages-list.component";
import { LoginComponent } from "./login/login.component";
import { ViewMessageDialogComponent } from "./view-message-dialog/view-message-dialog.component";

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		SidebarComponent,
		VisitorsComponent,
		VisitorsListComponent,
		VisitorsChartComponent,
		InboxComponent,
		MessagesListComponent,
		LoginComponent,
		ViewMessageDialogComponent,
	],
	imports: [
		BrowserModule,
		FormsModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		MatMenuModule,
		MatIconModule,
		MatBadgeModule,
		MatTableModule,
		MatPaginatorModule,
		MatSortModule,
		MatFormFieldModule,
		MatInputModule,
		MatButtonModule,
		MatDialogModule,
		NgxChartsModule,
		HttpClientModule,
	],
	providers: [
		AuthStore,
		InboxStore,
		VisitorStore,
		{
			provide: HTTP_INTERCEPTORS,
			useClass: InterceptorService,
			multi: true,
		},
	],
	bootstrap: [AppComponent],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
	entryComponents: [ViewMessageDialogComponent],
})
export class AppModule {}
