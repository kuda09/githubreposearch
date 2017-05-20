import {Injectable} from '@angular/core';
import {Effect, Actions} from "@ngrx/effects";
import {Observable} from "rxjs";

import {GithubApiService} from "../../shared/services/github-api.service";
import {empty} from "rxjs/observable/empty";
import {Repo} from "../../shared/models/repo";
import {of} from "rxjs/observable/of";
import {Response} from "@angular/http";


import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import {Action} from "@ngrx/store";
import {LoadCommitsAction, ActionTypes, LoadCommitsCompleteAction, LoadErrorAction, LoadPullRequestsAction, LoadPullRequestsCompleteAction, LoadIssuesAction, LoadIssuesCompleteAction} from "../actions/repo.actions";
import {Commit} from "../../shared/models/commit";
import {Issue} from "../../shared/models/issue";
import {PullRequest} from "../../shared/models/pull-request";

@Injectable()
export class RepoEffectService {

    constructor(private actions$: Actions,
                private githubAPIService: GithubApiService) {
    }


    @Effect()
    loadCommits$: Observable<Action> = this.actions$
        .ofType(ActionTypes.LOAD_COMMITS)
        .map((action: LoadCommitsAction) => <Repo>action.payload)
        .switchMap((repo: Repo) => {

            return this.githubAPIService.retrieveRepoCommits(repo.full_name)
                .map((commits: Commit[]) => new LoadCommitsCompleteAction(commits))
                .catch((error: Response) => of(new LoadErrorAction(error)));
        });

    @Effect()
    loadIssues$: Observable<Action> = this.actions$
        .ofType(ActionTypes.LOAD_ISSUES)
        .map((action: LoadIssuesAction) => <Repo>action.payload)
        .switchMap((repository: Repo) => {
            return this.githubAPIService.retrieveRepoIssues(repository.full_name)
                .map((issues: Issue[]) => new LoadIssuesCompleteAction(issues))
                .catch((error: Response) => of(new LoadErrorAction(error)));
        });

    @Effect()
    loadPulls$: Observable<Action> = this.actions$
        .ofType(ActionTypes.LOAD_PULLREQUESTS)
        .map((action: LoadPullRequestsAction) => <Repo>action.payload)
        .switchMap((repo: Repo) => {
            return this.githubAPIService.retrieveRepoPulls(repo.full_name)
                .map((pulls: PullRequest[]) => new LoadPullRequestsCompleteAction(pulls))
                .catch((error: Response) => of(new LoadErrorAction(error)));
        });
}
