import {Injectable} from '@angular/core';
import {Effect, Actions} from "@ngrx/effects";
import {Observable} from "rxjs";
import {GithubApiService} from "../../shared/services/github-api.service";
import {empty} from "rxjs/observable/empty";
import {Repo} from "../../shared/models/repo";
import {of} from "rxjs/observable/of";
import {Response} from "@angular/http";


import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/switchMap';
import {LoginSuccessAction, ActionTypes, LoginFailedAction} from "../actions/login.actions";
import {SearchAction} from "../actions/search.actions";
import {User} from "../../shared/models/user";

@Injectable()
export class LoginEffectService {

    constructor(private actions$: Actions,
                private githubAPIService: GithubApiService) {
    }


    @Effect()
    login$: Observable<LoginSuccessAction> = this.actions$
        .ofType(ActionTypes.LOGIN)
        .map((action: SearchAction) => action.payload)
        .switchMap((payload: any) => {


            console.log(payload);

            return this.githubAPIService.login(payload)
                .map((user: User) => new LoginFailedAction(user))
                .catch((error: Response) => of(new LoginFailedAction(error)))
        });


    /*@Effect()
     trending$: Observable<LoadTrendingCompleteAction> = this.actions$
     .ofType(ActionTypes.LOAD_TRENDING)
     /!*.take(1)*!/
     .map((action: LoadTrendingAction) => action.payload)
     .switchMap(() => {

     return this.githubAPIService.retrieveTrendingRepos()
     .map((repos: Repo[]) => new LoadTrendingCompleteAction(repos))
     .catch((error: Response) => of(new SearchCompleteError(error)))
     });*/
}
