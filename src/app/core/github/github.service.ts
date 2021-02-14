import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { IGithubUser, IGithubUserRepositories } from './github.d';

@Injectable({
	providedIn: 'root',
})
export class GithubService {
	constructor(private http: HttpClient) {}

	findUser(userName: string): Observable<IGithubUser> {
		return this.http.get<IGithubUser>(
			`https://api.github.com/users/${userName}`,
		);
	}

	getUserRepositories(userName: string): Observable<IGithubUserRepositories> {
		return this.http.get<IGithubUserRepositories>(
			`https://api.github.com/users/${userName}/repos`,
		);
	}
}
