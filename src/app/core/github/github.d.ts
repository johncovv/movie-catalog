import { Endpoints } from '@octokit/types';

export type IGithubUser = Endpoints['GET /users/{username}']['response']['data'];

export type IGithubUserRepositories = Endpoints['GET /users/{username}/repos']['response']['data'];
