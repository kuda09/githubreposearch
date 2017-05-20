import {Repo} from "../../shared/models/repo";
import {ActionTypes, Actions} from "../actions/home.actions";

export interface HomeState {
    loading: boolean;
    error: {};
    tags: Repo[];
    trending: Repo[];
}

export const homeInitialState: HomeState = {
    loading: false,
    tags: [],
    error: null,
    trending: []
}


export function homeReducer(state = homeInitialState, action: Actions): HomeState {

    switch (action.type) {

        case ActionTypes.TAGS: {

            return Object.assign({}, state, {
                loading: true
            });
        }

        case ActionTypes.TAGS_COMPLETE: {

            return Object.assign({}, state, {
                tags: <Repo[]>action.payload,
                loading: false,
                error: null,
            });
        }

        case ActionTypes.LOAD_TRENDING: {

            return Object.assign({}, state, {
                loading: true
            });
        }

        case ActionTypes.LOAD_TRENDING_COMPLETE: {

            const entities = <Repo[]>action.payload;

            return Object.assign({}, state, {
                trending: entities,
                loading: false,
                error: null,
            });
        }

        default:
            return state;
    }
}

export const getTrending = (state: HomeState) => state.trending;
export const getLoading = (state: HomeState) => state.loading;
export const getTags = (state: HomeState) => state.tags;
