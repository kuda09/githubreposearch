import {Effect, Actions} from "@ngrx/effects";
import {Observable} from "rxjs";
import {GithubApiService} from "../../shared/services/github-api.service";
import {of} from "rxjs/observable/of";
import {Response} from "@angular/http";
import {Router} from "@angular/router";

import {LoginSuccessAction, ActionTypes, LoginFailedAction, LoginAction, GetUserProfileAction} from "../actions/login.actions";
import {User} from "../../shared/models/user";

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/switchMap';
import {Injectable} from "@angular/core";
import {StorageService} from "../../shared/services/storage.service";
import {Store, Action} from "@ngrx/store";
import {ApplicationState} from "../index";
import {empty} from "rxjs/observable/empty";

@Injectable()
export class LoginEffectService {

    constructor(private actions$: Actions,
                private storage: StorageService,
                private store: Store<ApplicationState>,
                private router: Router,
                private githubAPIService: GithubApiService) {
    }


    @Effect()
    login$: Observable<Action> = this.actions$
        .ofType(ActionTypes.LOGIN)
        .take(1)
        .map((action: LoginAction) => action.payload)
        .switchMap((code) => {

            return this.githubAPIService.login(code)
                .map((resString) => {

                    if (!resString) return empty();

                        let error = resString.split("=");

                        if (error[0] === "error") {
                            return of(new LoginFailedAction(error));
                        }
                        return this.store.dispatch(new LoginSuccessAction(error[1]))

                    }
                )
                .catch((error: Response) => {
                    this.store.dispatch(new LoginFailedAction(error))

                    return of(null);
                })
        });


    @Effect()
    loginSuccess$: Observable<Action> = this.actions$
        .ofType(ActionTypes.LOGIN_SUCCESS)
        .take(1)
        .map((action: LoginSuccessAction) => action.payload)
        .switchMap((token) => {

            this.storage.addStorage('token', token.split("&")[0]);

            return this.githubAPIService.getProfile()
                .map((user: User) => {

                    this.router.navigate(['/']);
                    return this.store.dispatch(new GetUserProfileAction(user))
                })
                .catch((error: Response) => of(new LoginFailedAction(error)))
        });
}
