import {Injectable} from '@angular/core';
import {Store} from "@ngrx/store";
import {ApplicationState} from "../../store/index";
import {LoadTrendingAction, TagsAction} from "../../store/actions/home.actions";
import {getTrendingEntitiesSelector, getTagsEntitiesSelector} from "../../store/selectors";
import {Observable} from "rxjs";
import {Repo} from "../../shared/models/repo";

@Injectable()
export class HomeService {

    constructor(private store: Store<ApplicationState>) {
    }


    loadTrending() {

        return this.store.dispatch(new LoadTrendingAction());
    }

    getTrending(): Observable<Repo[]> {

        return this.store.select(getTrendingEntitiesSelector);
    }

    loadTags() {

        return this.store.dispatch(new TagsAction());
    }

    getTags(): Observable<Repo[]> {

        return this.store.select(getTagsEntitiesSelector);
    }

}
