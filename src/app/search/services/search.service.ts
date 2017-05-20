import {Injectable} from '@angular/core';
import {Store} from "@ngrx/store";
import {ApplicationState} from "../../store/index";
import {Observable} from "rxjs";
import {getSearchQuerySelector, getSearchLoadingSelector, getSearchEntitiesSelector} from "../../store/selectors";
import {Repo} from "../../shared/models/repo";
import {SearchAction} from "../../store/actions/search.actions";

@Injectable()
export class SearchService {

    constructor(private store: Store<ApplicationState>) {
    }

    getSearchQuery(): Observable<string> {
        return this.store.select(getSearchQuerySelector);
    }

    isLoading(): Observable<boolean> {
        return this.store.select(getSearchLoadingSelector);
    }

    getRepos(): Observable<Repo[]> {

        return this.store.select(getSearchEntitiesSelector);
    }

    /*loadTrending() {

     return this.store.dispatch(new LoadTrendingAction());
     }*/

    /*getTrending(): Observable<Repo[]> {

     return this.store.select(getTrendingEntitiesSelector);
     }*/

    performSearch(query: string) {
        return this.store.dispatch(new SearchAction(query))
    }

}
