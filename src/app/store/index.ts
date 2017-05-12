import {compose} from '@ngrx/core';
import {storeFreeze} from 'ngrx-store-freeze';
import {ActionReducer, combineReducers} from '@ngrx/store';
import {routerReducer, RouterState} from '@ngrx/router-store';
import {ISearchState, searchReducer} from "./reducers/search.reducer";
import {environment} from "../../environments/environment";


export interface IApplicationState {
    search: ISearchState;
    router: RouterState;
}

export const applicationInitialState = {router: {path: "/"}}

const reducers = {
    search: searchReducer
}

const developmentReducer: ActionReducer<IApplicationState> = compose(storeFreeze, combineReducers)(reducers);
const productionReducer: ActionReducer<IApplicationState> = combineReducers(reducers);

export function rootReducer(state: IApplicationState, action: any) {
    if (environment.production) {
        return productionReducer(state, action);
    } else {
        return developmentReducer(state, action);
    }
}