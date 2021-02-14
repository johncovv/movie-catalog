import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Endpoints } from '@octokit/types';

import { GithubService } from '../core/github/github.service';

type IGithubUser = Endpoints['GET /users/{username}']['response']['data'];

@Component({
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.less'],
})
export class DashboardComponent implements OnInit {
	@ViewChild('userNameInput') userNameInput!: ElementRef<HTMLInputElement>;

	userName?: string;
	user!: IGithubUser;

	constructor(
		private githubService: GithubService,
		private activatedRoute: ActivatedRoute,
		private router: Router,
	) {}

	ngOnInit(): void {
		this.activatedRoute.params.subscribe((params) => {
			if (params['userName']) {
				this.githubService
					.findUser(params['userName'])
					.subscribe((githubUser) => {
						this.user = githubUser;
					});
			}
		});
	}

	setUserName(inputTarget: EventTarget | null): void {
		this.userName = (inputTarget as HTMLInputElement).value;
	}

	goToUser(): void {
		this.router
			.navigate(['/user', this.userName])
			.then(() => (this.userNameInput.nativeElement.value = ''));
	}
}
