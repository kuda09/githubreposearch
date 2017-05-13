import { Injectable } from '@angular/core';
import {Store} from "@ngrx/store";
import {IApplicationState} from "../../store/index";
import {Observable} from "rxjs";
import {getSearchQuerySelector, getSearchLoadingSelector, getSearchEntitiesSelector, getTrendingEntitiesSelector} from "../../store/selectors";
import {IRepo} from "../../common/models/repo";
import {SearchAction, LoadTrendingAction} from "../../store/actions/search.actions";

@Injectable()
export class SearchService {

  constructor(private store: Store<IApplicationState>) { }

  getSearchQuery (): Observable<string> {
    return this.store.select(getSearchQuerySelector);
  }

  isLoading (): Observable<boolean> {
    return this.store.select(getSearchLoadingSelector);
  }

  getRepos (): Observable<IRepo[]> {

    return this.store.select(getSearchEntitiesSelector);
  }

  loadTrending (){

    return this.store.dispatch(new LoadTrendingAction());
  }

  getTrending (): Observable<IRepo[]> {

    return this.store.select(getTrendingEntitiesSelector);
  }

  performSearch(query: string) {
    return this.store.dispatch(new SearchAction(query))
  }

}
