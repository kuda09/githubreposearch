import {Injectable} from '@angular/core';
import {Effect, Actions} from "@ngrx/effects";
import {Observable} from "rxjs";
import {GithubApiService} from "../../shared/services/github-api.service";
import {Repo} from "../../shared/models/repo";
import {of} from "rxjs/observable/of";
import {Response} from "@angular/http";

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/switchMap';
import {LoadTrendingCompleteAction, ActionTypes, LoadTrendingAction} from "../actions/home.actions";
import {SearchCompleteError} from "../actions/search.actions";

@Injectable()
export class HomeEffectService {

    constructor(private actions$: Actions,
                private githubAPIService: GithubApiService) {
    }


    @Effect()
    trending$: Observable<LoadTrendingCompleteAction> = this.actions$
        .ofType(ActionTypes.LOAD_TRENDING)
        /*.take(1)*/
        .map((action: LoadTrendingAction) => action.payload)
        .switchMap(() => {

            return this.githubAPIService.retrieveTrendingRepos()
                .map((repos: Repo[]) => new LoadTrendingCompleteAction(repos))
                .catch((error: Response) => of(new SearchCompleteError(error)))
        });
}
