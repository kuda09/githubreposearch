import {Injectable} from '@angular/core';
import {config} from "../config";
import {RequestOptionsArgs, Http, Response} from "@angular/http";
import {Observable} from "rxjs";
import {Repo} from "../models/repo";
import {PullRequest} from "../models/pull-request";
import {Issue} from "../models/issue";
import {Commit} from "../models/commit";
import {AuthHttp} from "angular2-jwt";

@Injectable()
export class GithubApiService {

    API_URL: string = config.GITHUB_API_BASE_URL;
    requestOptions: RequestOptionsArgs = {
        search: `client_id=${config.GITHUB_API_CLIENT_ID}&client_secret=${config.GITHUB_API_CLIENT_SECRET}`,
    }
    body: {client_id: string; client_secret: string; code: any; redirect_uri: string; state: string};

    constructor(private http: Http, private authHttp: AuthHttp) {
    }

    retrieveRepos(q: string): Observable<Repo[]> {
        return this.http.get(`${this.API_URL}/search/repositories?q=${q}`, this.requestOptions)
            .map((res: Response) => res.json())
            .map((searchData: {items: Repo[]}) => searchData.items);
    }

    retrieveTrendingRepos(days = 7, language = 'JavaScript'): Observable<Repo[]> {
        return this.http.get(`${this.API_URL}/search/repositories?q=created:>${this.getDate(days)} language:${language}}`, this.requestOptions)
            .map((res: Response) => res.json())
            .map((searchData: {items: Repo[]}) => searchData.items);
    }

    retrieveRepo(name: string): Observable<Repo> {
        return this.http.get(`${this.API_URL}/repos/${name}`, this.requestOptions)
            .map((res: Response) => res.json());
    }


    retrieveRepoCommits(name: string): Observable<Commit[]> {
        return this.http.get(`${this.API_URL}/repos/${name}/commits`, this.requestOptions)
            .map((res: Response) => res.json());
    }

    retrieveRepoIssues(name: string): Observable<Issue[]> {
        return this.http.get(`${this.API_URL}/repos/${name}/issues`, this.requestOptions)
            .map((res: Response) => res.json());
    }

    retrieveRepoPulls(name: string): Observable<PullRequest[]> {
        return this.http.get(`${this.API_URL}/repos/${name}/pulls`, this.requestOptions)
            .map((res: Response) => res.json());
    }

    getDate(offsetDays: number): string {
        const offsetDate = new Date(new Date().getTime() - offsetDays * 24 * 3600 * 1000);
        return offsetDate.toISOString().substr(0, 10);
    }


    login(code): Observable<any> {

        this.body = {
            "client_id": config.GITHUB_API_CLIENT_ID,
            "client_secret": config.GITHUB_API_CLIENT_SECRET,
            "code": code,
            "redirect_uri": "http://localhost:4200/login",
            "state": config.state
        };

        return this.http.post(`https://cors-anywhere.herokuapp.com/https://github.com/login/oauth/access_token`, this.body)
            .map((res: Response) => res.text());
    }


    getProfile() {

        return this.authHttp.get(`https://api.github.com/user`)
            .map((res: Response) => res.json());

    }

}
