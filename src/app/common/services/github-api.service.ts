import { Injectable } from '@angular/core';
import {config} from "../config";
import {RequestOptionsArgs, Http, Response} from "@angular/http";
import {Observable} from "rxjs";
import {IRepo} from "../models/repo";
import {IPullRequest} from "../models/pull-request";
import {IIssue} from "../models/issue";
import {ICommit} from "../models/commit";

@Injectable()
export class GithubApiService {

  API_URL: string = config.GITHUB_API_BASE_URL;
  requestOptions: RequestOptionsArgs = {
    search: `client_id=${config.GITHUB_API_CLIENT_ID}&client_secret=${config.GITHUB_API_CLIENT_SECRET}`,
  }
  constructor(private http: Http) { }

  retrieveRepos(q: string): Observable<IRepo[]> {
    return this.http.get(`${this.API_URL}/search/repositories?q=${q}`, this.requestOptions)
        .map((res: Response) => res.json())
        .map((searchData: { items: IRepo[]}) => searchData.items);
  }

  retrieveTrendingRepos(days = 7, language = 'JavaScript'): Observable<IRepo[]> {
    return this.http.get(`${this.API_URL}/search/repositories?q=${`created:>${this.getDate(days)} language:${language}`}`, this.requestOptions)
        .map((res: Response) => res.json())
        .map((searchData: { items: IRepo[]}) => searchData.items);
  }

  retrieveRepo(name: string): Observable<IRepo> {
    return this.http.get(`${this.API_URL}/repos/${name}`, this.requestOptions)
        .map((res: Response) => res.json());
  }


  retrieveRepoCommits(name: string): Observable<ICommit[]> {
    return this.http.get(`${this.API_URL}/repos/${name}/commits`, this.requestOptions)
        .map((res: Response) => res.json());
  }

  retrieveRepoIssues(name: string): Observable<IIssue[]> {
    return this.http.get(`${this.API_URL}/repos/${name}/issues`, this.requestOptions)
        .map((res: Response) => res.json());
  }

  retrieveRepoPulls(name: string): Observable<IPullRequest[]> {
    return this.http.get(`${this.API_URL}/repos/${name}/pulls`, this.requestOptions)
        .map((res: Response) => res.json());
  }

  getDate(offsetDays: number): string {
    const offsetDate = new Date(new Date().getTime() - offsetDays * 24 * 3600 * 1000);
    return offsetDate.toISOString().substr(0, 10);
  }

}
