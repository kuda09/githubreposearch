import { Action } from '@ngrx/store';
import { type } from '../../common/utils';
import {Response} from "@angular/http";
import {IRepo} from "../../common/models/repo";
import {IPullRequest} from "../../common/models/pull-request";
import {IIssue} from "../../common/models/issue";
import {ICommit} from "../../common/models/commit";


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
    constructor(public payload: IRepo) {}
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
    constructor(public payload: ICommit[]) {}
}

export class LoadIssuesAction implements Action {
    type: string = ActionTypes.LOAD_ISSUES;
    constructor(public payload?) {}
}

export class LoadIssuesCompleteAction implements Action {
    type: string = ActionTypes.LOAD_ISSUES_COMPLETE;
    constructor(public payload: IIssue[]) {}
}

export class LoadPullRequestsAction implements Action {
    type: string = ActionTypes.LOAD_PULLREQUESTS;
    constructor(public payload?) {}
}

export class LoadPullRequestsCompleteAction implements Action {
    type: string = ActionTypes.LOAD_PULLREQUESTS_COMPLETE;
    constructor(public payload: IPullRequest[]) {}
}


export type Actions =  LoadAction | LoadErrorAction | LoadCommitsAction | LoadCommitsCompleteAction | LoadIssuesAction | LoadIssuesCompleteAction | LoadPullRequestsAction | LoadPullRequestsCompleteAction;