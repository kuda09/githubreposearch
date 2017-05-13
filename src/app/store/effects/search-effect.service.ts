import {Injectable} from '@angular/core';
import {Effect, Actions} from "@ngrx/effects";
import {Observable} from "rxjs";
import {SearchCompleteAction, ActionTypes, SearchAction, SearchCompleteError, LoadTrendingCompleteAction, LoadTrendingAction} from "../actions/search.actions";
import {GithubApiService} from "../../common/services/github-api.service";
import {empty} from "rxjs/observable/empty";
import {IRepo} from "../../common/models/repo";
import {of} from "rxjs/observable/of";
import {Response} from "@angular/http";


import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/switchMap';

@Injectable()
export class SearchEffectService {

    constructor(private actions$: Actions,
                private githubAPIService: GithubApiService) {
    }


    @Effect()
    search$: Observable<SearchCompleteAction> = this.actions$
        .ofType(ActionTypes.SEARCH)
        .map((action: SearchAction) => action.payload)
        .switchMap((query: string) => {

            if(!query) return empty();

        return this.githubAPIService.retrieveRepos(query)
            .map((repos: IRepo[]) => new SearchCompleteAction(repos))
            .catch((error: Response) => of(new SearchCompleteError(error)))
        });


    @Effect()
    trending$: Observable<LoadTrendingCompleteAction> = this.actions$
        .ofType(ActionTypes.LOAD_TRENDING)
        .take(1)
        .map((action: LoadTrendingAction) => action.payload)
        .switchMap(() => {

            return this.githubAPIService.retrieveTrendingRepos()
                .map((repos: IRepo[]) => new LoadTrendingCompleteAction(repos))
                .catch((error: Response) => of(new SearchCompleteError(error)))
        });
}
