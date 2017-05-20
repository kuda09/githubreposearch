import {Repo} from "../../shared/models/repo";
import {Actions, ActionTypes} from "../actions/search.actions";
import {Response} from "@angular/http";

export interface SearchState {
    entities: Repo[];
    trending: Repo[];
    query: string;
    loading: boolean;
    error: null;
}


export const searchInitialState: SearchState = {
    entities: [],
    trending: [],
    query: null,
    loading: false,
    error: null,
}

export function searchReducer(state = searchInitialState, action: Actions): SearchState {

    switch (action.type) {

        case ActionTypes.SEARCH: {

            const query: string = <string>action.payload;

            if(!query) return state;

            return Object.assign({}, state, {
                query: query,
                loading: true
            })
        }

        case ActionTypes.SEARCH_COMPLETE: {

            const entities = <Repo[]>action.payload;

            return Object.assign({}, state, {
                entities: entities,
                query: state.query,
                loading: false,
                error: null,
            });
        }

        case ActionTypes.SEARCH_ERROR: {

            const error = <Response>action.payload;

            return Object.assign({}, state, {
                loading: false,
                error: {
                    statusCode : error.status,
                    message: error.statusText,
                }
            })
        }

        default: {

            return state;
        }
    }
}


export const getQuery = (state: SearchState) => state.query;
export const getLoading = (state: SearchState) => state.loading;
export const getEntities = (state: SearchState) => state.entities;
export const getError = (state: SearchState) => state.error;
