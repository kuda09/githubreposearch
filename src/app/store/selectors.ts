///<reference path="reducers/search.reducer.ts"/>
import {IApplicationState} from "./index";
import {createSelector} from "reselect";
import {getEntities, getQuery, getLoading, getTrending, getError} from "./reducers/search.reducer";
import {RouterState} from "@ngrx/router-store";
import {getPulls, getIssues, getCommits, getEntity} from "./reducers/repo.reducer";

//search selectors
export const getSearchStateSelector = (state: IApplicationState) => state.search;
export const getSearchEntitiesSelector = createSelector(getSearchStateSelector, getEntities);
export const getSearchQuerySelector = createSelector(getSearchStateSelector, getQuery);
export const getSearchLoadingSelector = createSelector(getSearchStateSelector, getLoading);
export const getTrendingEntitiesSelector = createSelector(getSearchStateSelector, getTrending);
export const getSearchErrorSelector= createSelector(getSearchStateSelector, getError);

//repo selectors
export const getRepoStateSelector = (state: IApplicationState) => state.repo;
export const getRepoEntitySelector = createSelector(getRepoStateSelector, getEntity);
export const getRepoCommitsSelector = createSelector(getRepoStateSelector, getCommits);
export const getRepoIssuesSelector = createSelector(getRepoStateSelector, getIssues);
export const getRepoPullsSelector = createSelector(getRepoStateSelector, getPulls);

//router seletors
export const getRouterState = (state: IApplicationState) => state.router;
export const getRouterPath = createSelector(getRouterState, (state: RouterState) => state.path);