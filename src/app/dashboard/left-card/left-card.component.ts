import { Component, Input } from '@angular/core';

import { IGithubUser } from '../../core/github/github';

@Component({
	selector: 'app-left-card',
	templateUrl: './left-card.component.html',
	styleUrls: ['./left-card.component.less'],
})
export class LeftCardComponent {
	@Input() user!: IGithubUser;
}
