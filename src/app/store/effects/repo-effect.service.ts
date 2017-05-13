import {Injectable} from '@angular/core';
import {Effect, Actions} from "@ngrx/effects";
import {Observable} from "rxjs";

import {GithubApiService} from "../../common/services/github-api.service";
import {empty} from "rxjs/observable/empty";
import {IRepo} from "../../common/models/repo";
import {of} from "rxjs/observable/of";
import {Response} from "@angular/http";


import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import {Action} from "@ngrx/store";
import {LoadCommitsAction, ActionTypes, LoadCommitsCompleteAction, LoadErrorAction, LoadPullRequestsAction, LoadPullRequestsCompleteAction, LoadIssuesAction, LoadIssuesCompleteAction} from "../actions/repo.actions";
import {ICommit} from "../../common/models/commit";
import {IIssue} from "../../common/models/issue";
import {IPullRequest} from "../../common/models/pull-request";

@Injectable()
export class RepoEffectService {

    constructor(private actions$: Actions,
                private githubAPIService: GithubApiService) {
    }


    @Effect()
    loadCommits$: Observable<Action> = this.actions$
        .ofType(ActionTypes.LOAD_COMMITS)
        .map((action: LoadCommitsAction) => <IRepo>action.payload )
        .switchMap((repo: IRepo) => {

            return this.githubAPIService.retrieveRepoCommits(repo.full_name)
                .map((commits: ICommit[]) => new LoadCommitsCompleteAction(commits))
                .catch((error: Response) => of(new LoadErrorAction(error)));
        });

    @Effect()
    loadIssues$: Observable<Action> = this.actions$
        .ofType(ActionTypes.LOAD_ISSUES)
        .map((action: LoadIssuesAction) => <IRepo>action.payload )
        .switchMap((repository: IRepo) => {
            return this.githubAPIService.retrieveRepoIssues(repository.full_name)
                .map((issues: IIssue[]) => new LoadIssuesCompleteAction(issues))
                .catch((error: Response) => of(new LoadErrorAction(error)));
        });

    @Effect()
    loadPulls$: Observable<Action> = this.actions$
        .ofType(ActionTypes.LOAD_PULLREQUESTS)
        .map((action: LoadPullRequestsAction) => <IRepo>action.payload )
        .switchMap((repo: IRepo) => {
            return this.githubAPIService.retrieveRepoPulls(repo.full_name)
                .map((pulls: IPullRequest[]) => new LoadPullRequestsCompleteAction(pulls))
                .catch((error: Response) => of(new LoadErrorAction(error)));
        });
}
