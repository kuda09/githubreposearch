import {Injectable} from '@angular/core';
import {Store} from "@ngrx/store";
import {IApplicationState} from "../../store/index";
import {Observable} from "rxjs";
import {IRepo} from "../../common/models/repo";
import {getRepoEntitySelector, getRepoCommitsSelector, getRepoPullsSelector, getRepoIssuesSelector} from "../../store/selectors";
import {ICommit} from "../../common/models/commit";
import {LoadCommitsAction, LoadPullRequestsAction, LoadIssuesAction} from "../../store/actions/repo.actions";
import {IPullRequest} from "../../common/models/pull-request";
import {IIssue} from "../../common/models/issue";

@Injectable()
export class RepoService {

    constructor(private store: Store<IApplicationState>) {
    }


    getRepo(): Observable<IRepo> {

        return this.store.select(getRepoEntitySelector)
    }

    getCommits(repo: IRepo): Observable<ICommit[]> {

        this.store.dispatch(new LoadCommitsAction(repo));

        return this.store.select(getRepoCommitsSelector);
    }

    getPulls(repo: IRepo): Observable<IPullRequest[]> {

        this.store.dispatch(new LoadPullRequestsAction(repo));

        return this.store.select(getRepoPullsSelector);
    }

    getIssues(repo: IRepo): Observable<IIssue[]> {

        this.store.dispatch(new LoadIssuesAction(repo));

        return this.store.select(getRepoIssuesSelector);
    }


}
