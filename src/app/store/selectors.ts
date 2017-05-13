///<reference path="reducers/search.reducer.ts"/>
import {IApplicationState} from "./index";
import {createSelector} from "reselect";
import {getEntities, getQuery, getLoading, getTrending, getError} from "./reducers/search.reducer";
import {RouterState} from "@ngrx/router-store";
import {getPulls, getIssues, getCommits, getEntity} from "./reducers/repo.reducer";

//search selectors
export const getRepoSeachState = (state: IApplicationState) => state.search;
export const getReposSearchEntities = createSelector(getRepoSeachState, getEntities);
export const getReposSearchQuery = createSelector(getRepoSeachState, getQuery);
export const getReposSearchLoading = createSelector(getRepoSeachState, getLoading);
export const getReposSearchTrending = createSelector(getRepoSeachState, getTrending);
export const getReposSearchError= createSelector(getRepoSeachState, getError);

//repo selectors
export const getRepoState = (state: IApplicationState) => state.repo;
export const getRepoEntitySelector = createSelector(getRepoState, getEntity);
export const getRepoCommitsSelector = createSelector(getRepoState, getCommits);
export const getRepoIssuesSelector = createSelector(getRepoState, getIssues);
export const getRepoPullsSelector = createSelector(getRepoState, getPulls);

//router seletors
export const getRouterState = (state: IApplicationState) => state.router;
export const getRouterPath = createSelector(getRouterState, (state: RouterState) => state.path);