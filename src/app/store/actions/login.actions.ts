import {Action} from '@ngrx/store';
import {type} from "../../shared/utils";
import {User} from "../../shared/models/user";

export const ActionTypes = {
    LOGIN: type('[User] LOGIN'),
    LOGIN_SUCCESS: type('[User] LOGIN SUCCESS'),
    LOGIN_FAILED: type('[User] LOGIN FAILED'),
    LOGOUT: type('[User] RETRIEVE USER'),
    LOGOUT_SUCCESS: type('[User] REMOVE USER')
}

export class LoginAction implements Action {

    type = ActionTypes.LOGIN;

    constructor(public payload?) {
    }
}

export class LoginSuccessAction implements Action {

    type = ActionTypes.LOGIN_SUCCESS;

    constructor(public payload: User) {
    }
}

export class LoginFailedAction implements Action {

    type = ActionTypes.LOGIN_FAILED;

    constructor(public payload?) {
    }
}

export class LogoutFailedAction implements Action {

    type = ActionTypes.LOGIN_FAILED;

    constructor(public payload?) {
    }
}


export class LogoutSuccessAction implements Action {

    type = ActionTypes.LOGIN_FAILED;

    constructor(public payload?) {
    }
}

export type Actions = LoginAction | LoginFailedAction | LoginSuccessAction | LogoutFailedAction | LogoutSuccessAction;
