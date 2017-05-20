import {Repo} from "../../shared/models/repo";
import {Commit} from "../../shared/models/commit";
import {Issue} from "../../shared/models/issue";
import {PullRequest} from "../../shared/models/pull-request";
import {Actions, ActionTypes} from "../actions/repo.actions";

export interface RepoState {
    entity: Repo;
    loading: boolean;
    commits: Commit[];
    issues: Issue[];
    pulls: PullRequest[];
}

export const repoInitialState: RepoState = {
    entity: null,
    loading: false,
    commits: [],
    issues: [],
    pulls: []
}


export function repoReducer(state = repoInitialState, action: Actions): RepoState {

    switch (action.type) {

        case ActionTypes.LOAD: {

            return Object.assign({}, repoInitialState, {
                entity: <Repo>action.payload,
                error: null,
            });
        }

        case ActionTypes.LOAD_COMMITS_COMPLETE: {

            return Object.assign({}, state, {
                commits: <Commit[]>action.payload,
                error: null,
                loading: false,
            });
        }

        case ActionTypes.LOAD_ISSUES_COMPLETE: {

            return Object.assign({}, state, {
                issues: <Issue[]>action.payload,
                error: null,
                loading: false,
            });
        }

        case ActionTypes.LOAD_PULLREQUESTS_COMPLETE: {
            return Object.assign({}, state, {
                pulls: <PullRequest[]>action.payload,
                error: null,
            });
        }
        default:
            return state;
    }
}

export const getEntity = (state: RepoState) => state.entity;
export const getLoading = (state: RepoState) => state.loading;
export const getCommits = (state: RepoState) => state.commits;
export const getIssues = (state: RepoState) => state.issues;
export const getPulls = (state: RepoState) => state.pulls;
