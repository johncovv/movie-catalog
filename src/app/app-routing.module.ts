import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
	{
		path: '',
		pathMatch: 'full',
		redirectTo: 'user/johncovv',
	},
	{
		path: 'user/:userName',
		component: DashboardComponent,
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
