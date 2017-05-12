import {IRepo} from "../../common/models/repo";
import {ICommit} from "../../common/models/commit";
import {IIssue} from "../../common/models/issue";
import {IPullRequest} from "../../common/models/pull-request";
import {Actions, ActionTypes} from "../actions/repo.actions";

export interface IRepoState {
    entity: IRepo;
    loading: boolean;
    commits: ICommit[];
    issues: IIssue[];
    pulls: IPullRequest[];
}

export const repoInitialState: IRepoState = {
    entity: null,
    loading: false,
    commits: [],
    issues: [],
    pulls: []
}


export function repoReducer(state = repoInitialState, action: Actions) : IRepoState {

    switch (action.type) {

        case ActionTypes.LOAD: {

            return Object.assign({}, repoInitialState, {
                entity: <IRepo>action.payload,
                error: null,
            });
        }

        case ActionTypes.LOAD_COMMITS_COMPLETE: {

            return Object.assign({}, state, {
                commits: <ICommit[]>action.payload,
                error: null,
                loading: false,
            });
        }

        case ActionTypes.LOAD_ISSUES_COMPLETE: {

            return Object.assign({}, state, {
                issues: <IIssue[]>action.payload,
                error: null,
                loading: false,
            });
        }

        case ActionTypes.LOAD_PULLREQUESTS_COMPLETE: {
            return Object.assign({}, state, {
                pulls: <IPullRequest[]>action.payload,
                error: null,
            });
        }
        default:
            return state;
    }
}

export const getEntity = (state: IRepoState) => state.entity;
export const getLoading = (state: IRepoState) => state.loading;
export const getCommits = (state: IRepoState) => state.commits;
export const getIssues = (state: IRepoState) => state.issues;
export const getPulls = (state: IRepoState) => state.pulls;
