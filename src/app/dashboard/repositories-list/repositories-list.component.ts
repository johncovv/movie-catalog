import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IGithubUserRepositories } from '../../core/github/github';
import { GithubService } from '../../core/github/github.service';

@Component({
	selector: 'app-repositories-list',
	templateUrl: './repositories-list.component.html',
	styleUrls: ['./repositories-list.component.less'],
})
export class RepositoriesListComponent implements OnInit {
	repositories!: IGithubUserRepositories;

	constructor(
		private githubService: GithubService,
		private activatedRoute: ActivatedRoute,
	) {}

	ngOnInit(): void {
		this.activatedRoute.params.subscribe((params) => {
			if (params['userName']) {
				this.githubService
					.getUserRepositories(params['userName'])
					.subscribe((repos) => (this.repositories = repos));
			}
		});
	}
}
