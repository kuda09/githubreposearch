import { Injectable } from '@angular/core';
import {Store} from "@ngrx/store";
import {IApplicationState} from "../../store/index";
import {Observable} from "rxjs";
import {getReposSearchQuery, getReposSearchLoading, getReposSearchEntities} from "../../store/selectors";
import {IRepo} from "../../common/models/repo";
import {SearchAction} from "../../store/actions/search.actions";

@Injectable()
export class SearchService {

  constructor(private store: Store<IApplicationState>) { }

  getSearchQuery (): Observable<string> {
    return this.store.select(getReposSearchQuery);
  }

  isLoading (): Observable<boolean> {
    return this.store.select(getReposSearchLoading);
  }

  getRepos (): Observable<IRepo[]> {

    return this.store.select(getReposSearchEntities);
  }

  performSearch(query: string) {
    return this.store.dispatch(new SearchAction(query))
  }

}
