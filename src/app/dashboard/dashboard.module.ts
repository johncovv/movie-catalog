import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DashboardComponent } from './dashboard.component';
import { LeftCardComponent } from './left-card/left-card.component';
import { RepositoriesListComponent } from './repositories-list/repositories-list.component';

@NgModule({
	declarations: [
		DashboardComponent,
		LeftCardComponent,
		RepositoriesListComponent,
	],
	imports: [CommonModule],
})
export class DashboardModule {}
