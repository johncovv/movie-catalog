import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { DashboardModule } from './dashboard/dashboard.module';

@NgModule({
	imports: [
		CommonModule,
		BrowserModule,
		AppRoutingModule,
		CoreModule,
		HttpClientModule,
		DashboardModule,
	],
	providers: [],
	declarations: [AppComponent],
	bootstrap: [AppComponent],
})
export class AppModule {
	test: string = 'ok';
}
