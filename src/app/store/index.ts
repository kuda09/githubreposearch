import {compose} from '@ngrx/core';
import {storeFreeze} from 'ngrx-store-freeze';
import {ActionReducer, combineReducers} from '@ngrx/store';
import {routerReducer, RouterState} from '@ngrx/router-store';
import {SearchState, searchReducer} from "./reducers/search.reducer";
import {environment} from "../../environments/environment";
import {RepoState, repoReducer} from "./reducers/repo.reducer";
import {HomeState, homeReducer} from "./reducers/home.reducer";


export interface ApplicationState {
    search: SearchState;
    home: HomeState;
    repo: RepoState
    router: RouterState;
}

export const applicationInitialState = {router: {path: "/"}}

const reducers = {
    search: searchReducer,
    home: homeReducer,
    router: routerReducer,
    repo: repoReducer
}

const developmentReducer: ActionReducer<ApplicationState> = compose(storeFreeze, combineReducers)(reducers);
const productionReducer: ActionReducer<ApplicationState> = combineReducers(reducers);

export function rootReducer(state: ApplicationState, action: any) {
    if (environment.production) {
        return productionReducer(state, action);
    } else {
        return developmentReducer(state, action);
    }
}