import {IApplicationState} from "./index";
import {createSelector} from "reselect";
import {getEntities, getQuery, getLoading, getTrending, getError} from "./reducers/search.reducer";
import {RouterState} from "@ngrx/router-store";

//search selectors
export const getRepoSeachState = (state: IApplicationState) => state.search;
export const getReposSearchEntities = createSelector(getRepoSeachState, getEntities);
export const getReposSearchQuery = createSelector(getRepoSeachState, getQuery);
export const getReposSearchLoading = createSelector(getRepoSeachState, getLoading);
export const getReposSearchTrending = createSelector(getRepoSeachState, getTrending);
export const getReposSearchError= createSelector(getRepoSeachState, getError);

//repo selectors


//router seletors
export const getRouterState = (state: IApplicationState) => state.router;
export const getRouterPath = createSelector(getRouterState, (state: RouterState) => state.path);