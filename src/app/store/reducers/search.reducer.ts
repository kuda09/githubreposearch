import {IRepo} from "../../common/models/repo";
import {Actions, ActionTypes} from "../actions/search.actions";
import {Response} from "@angular/http";

export interface ISearchState {
    entities: IRepo[];
    trending: IRepo[];
    query: string;
    loading: boolean;
    error: null;
}


export const searchInitialState: ISearchState = {
    entities: [],
    trending: [],
    query: null,
    loading: false,
    error: null,
}

export function searchReducer(state = searchInitialState, action: Actions): ISearchState {

    switch (action.type) {

        case ActionTypes.SEARCH: {

            const query: string = <string>action.payload;

            if(!query) return state;

            return Object.assign({}, searchInitialState, {
                query: query,
                loading: true
            })
        }

        case ActionTypes.SEARCH_COMPLETE: {

            const entities = <IRepo[]>action.payload;

            return Object.assign({}, searchInitialState, {
                entities: entities,
                query: state.query,
                loading: false,
                error: null,
            });
        }

        case ActionTypes.SEARCH_ERROR: {

            const error = <Response>action.payload;

            return Object.assign({}, searchInitialState, {
                loading: false,
                error: {
                    statusCode : error.status,
                    message: error.statusText,
                }
            })
        }

        case ActionTypes.LOAD_TRENDING_COMPLETE: {

            const entities = <IRepo[]>action.payload;

            return Object.assign({}, searchInitialState, {
                trending: entities,
                query: state.query,
                loading: false,
                error: null,
            });
        }

        default: {

            return state;
        }
    }
}


export const getQuery = (state: ISearchState) => state.query;
export const getLoading = (state: ISearchState) => state.loading;
export const getTrending = (state: ISearchState) => state.trending;
export const getEntities = (state: ISearchState) => state.entities;
export const getError= (state: ISearchState) => state.error;
