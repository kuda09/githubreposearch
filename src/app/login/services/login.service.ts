import {Injectable} from '@angular/core';
import {Store} from "@ngrx/store";

import {ApplicationState} from "../../store/index";
import {LoginAction} from "../../store/actions/login.actions";
import {getLoginErrorSelector, getUserSelector, getLoadingSelector} from "../../store/selectors";


@Injectable()
export class LoginService {

    constructor(private store: Store<ApplicationState>) {
    }


    login(code) {

        this.store.dispatch(new LoginAction(code))
    }

    loginFailed() {

        return this.store.select(getLoginErrorSelector);
    }

    loginSuccess() {

        return this.store.select(getUserSelector)
    }

    loginLoading() {

        return this.store.select(getLoadingSelector);
    }

}
