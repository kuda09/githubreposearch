import {Actions, ActionTypes} from "../actions/login.actions";
import {User} from "../../shared/models/user";

export interface LoginState {
    loading: boolean;
    error: {};
    user: User;
}

export const homeInitialState: LoginState = {
    loading: false,
    error: null,
    user: null
}


export function loginReducer(state = homeInitialState, action: Actions): LoginState {

    switch (action.type) {

        case ActionTypes.LOGIN: {

            return Object.assign({}, state, {
                loading: true
            });
        }

        case ActionTypes.GET_PROFILE: {

            return Object.assign({}, state, {
                user: <User>action.payload,
                loading: false,
                error: null,
            });
        }

        case ActionTypes.LOGIN_FAILED: {

            return Object.assign({}, state, {
                error: action.payload,
                loading: false
            });
        }

        case ActionTypes.LOGOUT_SUCCESS: {

            return Object.assign({}, homeInitialState);
        }

        default:
            return state;
    }
}

export const getUser = (state: LoginState) => state.user;
export const getLoginError = (state: LoginState) => state.error;
export const getLoginLoading = (state: LoginState) => state.loading;
