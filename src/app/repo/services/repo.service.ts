import {Injectable} from '@angular/core';
import {Store} from "@ngrx/store";
import {ApplicationState} from "../../store/index";
import {Observable} from "rxjs";
import {Repo} from "../../shared/models/repo";
import {getRepoEntitySelector, getRepoCommitsSelector, getRepoPullsSelector, getRepoIssuesSelector} from "../../store/selectors";
import {Commit} from "../../shared/models/commit";
import {LoadCommitsAction, LoadPullRequestsAction, LoadIssuesAction} from "../../store/actions/repo.actions";
import {PullRequest} from "../../shared/models/pull-request";
import {Issue} from "../../shared/models/issue";

@Injectable()
export class RepoService {

    constructor(private store: Store<ApplicationState>) {
    }


    getRepo(): Observable<Repo> {

        return this.store.select(getRepoEntitySelector)
    }

    getCommits(repo: Repo): Observable<Commit[]> {

        this.store.dispatch(new LoadCommitsAction(repo));

        return this.store.select(getRepoCommitsSelector);
    }

    getPulls(repo: Repo): Observable<PullRequest[]> {

        this.store.dispatch(new LoadPullRequestsAction(repo));

        return this.store.select(getRepoPullsSelector);
    }

    getIssues(repo: Repo): Observable<Issue[]> {

        this.store.dispatch(new LoadIssuesAction(repo));

        return this.store.select(getRepoIssuesSelector);
    }


}
