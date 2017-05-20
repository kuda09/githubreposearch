///<reference path="reducers/search.reducer.ts"/>
import {ApplicationState} from "./index";
import {createSelector} from "reselect";
import {getEntities, getQuery, getLoading, getError} from "./reducers/search.reducer";
import {RouterState} from "@ngrx/router-store";
import {getPulls, getIssues, getCommits, getEntity} from "./reducers/repo.reducer";
import {getTrending, getTags} from "./reducers/home.reducer";


//home selectors
export const getHomeStateSelector = (state: ApplicationState) => state.home;
export const getTrendingEntitiesSelector = createSelector(getHomeStateSelector, getTrending);
export const getTagsEntitiesSelector = createSelector(getHomeStateSelector, getTags);

//search selectors
export const getSearchStateSelector = (state: ApplicationState) => state.search;
export const getSearchEntitiesSelector = createSelector(getSearchStateSelector, getEntities);
export const getSearchQuerySelector = createSelector(getSearchStateSelector, getQuery);
export const getSearchLoadingSelector = createSelector(getSearchStateSelector, getLoading);
export const getSearchErrorSelector= createSelector(getSearchStateSelector, getError);

//repo selectors
export const getRepoStateSelector = (state: ApplicationState) => state.repo;
export const getRepoEntitySelector = createSelector(getRepoStateSelector, getEntity);
export const getRepoCommitsSelector = createSelector(getRepoStateSelector, getCommits);
export const getRepoIssuesSelector = createSelector(getRepoStateSelector, getIssues);
export const getRepoPullsSelector = createSelector(getRepoStateSelector, getPulls);

//router seletors
export const getRouterState = (state: ApplicationState) => state.router;
export const getRouterPath = createSelector(getRouterState, (state: RouterState) => state.path);