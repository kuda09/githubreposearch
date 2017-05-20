import { Action } from '@ngrx/store';
import {type} from '../../shared/utils';
import {Response} from "@angular/http";
import {Repo} from "../../shared/models/repo";
import {PullRequest} from "../../shared/models/pull-request";
import {Issue} from "../../shared/models/issue";
import {Commit} from "../../shared/models/commit";


export const ActionTypes = {
    LOAD: type('Load'),
    LOAD_ERROR: type('Load Error'),
    LOAD_COMMITS: type('Load Commits'),
    LOAD_COMMITS_COMPLETE: type('Load Commits Complete'),
    LOAD_ISSUES: type('Load Issues'),
    LOAD_ISSUES_COMPLETE: type('Load Issues Complete'),
    LOAD_PULLREQUESTS: type('Load Pull Requests'),
    LOAD_PULLREQUESTS_COMPLETE: type('Load Pull Requests Complete'),

}


export class LoadAction implements Action {
    type: string = ActionTypes.LOAD;

    constructor(public payload: Repo) {
    }
}


export class LoadErrorAction implements Action {
    type: string = ActionTypes.LOAD_ERROR;
    constructor(public payload: Response) {}
}

export class LoadCommitsAction implements Action {
    type: string = ActionTypes.LOAD_COMMITS;
    constructor(public payload?) {}
}

export class LoadCommitsCompleteAction implements Action {
    type: string = ActionTypes.LOAD_COMMITS_COMPLETE;

    constructor(public payload: Commit[]) {
    }
}

export class LoadIssuesAction implements Action {
    type: string = ActionTypes.LOAD_ISSUES;
    constructor(public payload?) {}
}

export class LoadIssuesCompleteAction implements Action {
    type: string = ActionTypes.LOAD_ISSUES_COMPLETE;

    constructor(public payload: Issue[]) {
    }
}

export class LoadPullRequestsAction implements Action {
    type: string = ActionTypes.LOAD_PULLREQUESTS;
    constructor(public payload?) {}
}

export class LoadPullRequestsCompleteAction implements Action {
    type: string = ActionTypes.LOAD_PULLREQUESTS_COMPLETE;

    constructor(public payload: PullRequest[]) {
    }
}


export type Actions =  LoadAction | LoadErrorAction | LoadCommitsAction | LoadCommitsCompleteAction | LoadIssuesAction | LoadIssuesCompleteAction | LoadPullRequestsAction | LoadPullRequestsCompleteAction;