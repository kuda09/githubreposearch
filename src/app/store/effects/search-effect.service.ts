import {Injectable} from '@angular/core';
import {Effect, Actions} from "@ngrx/effects";
import {Observable} from "rxjs";
import {SearchCompleteAction, ActionTypes, SearchAction, SearchCompleteError} from "../actions/search.actions";
import {GithubApiService} from "../../shared/services/github-api.service";
import {empty} from "rxjs/observable/empty";
import {Repo} from "../../shared/models/repo";
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
            .map((repos: Repo[]) => new SearchCompleteAction(repos))
            .catch((error: Response) => of(new SearchCompleteError(error)))
        });
}
