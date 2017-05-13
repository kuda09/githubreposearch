import {Injectable} from '@angular/core';
import {of} from 'rxjs/observable/of';
import {Resolve, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {IRepo} from "../../common/models/repo";
import {Observable} from "rxjs";
import {GithubApiService} from "../../common/services/github-api.service";
import {IApplicationState} from "../../store/index";
import {Store} from "@ngrx/store";
import {getRepoEntitySelector} from "../../store/selectors";
import {Response} from "@angular/http";
import {LoadErrorAction, LoadAction} from "../../store/actions/repo.actions";

import 'rxjs/add/operator/take';
import 'rxjs/add/operator/switchMap';


@Injectable()
export class RepoResolveService implements Resolve<IRepo> {

    constructor(private githubAPIService: GithubApiService, private store: Store<IApplicationState>) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IRepo>|Promise<IRepo>|IRepo {

        const repoName = route.params['owner'] + '/' + route.params['repoName'];

        return this.getRepoFromStore(repoName)
            .take(1)
            .switchMap((repo: IRepo) => {
                if (repo) return of(repo);

                 return this.getRepoFromAPI(repoName)
            })
    }

    getRepoFromStore(name: string): Observable<IRepo| boolean> {

        return this.store.select(getRepoEntitySelector)
            .map((repo: IRepo) => {
                return repo && repo.full_name === name ? repo : false;
            })
            .catch((error: Response) => {

                this.store.dispatch(new LoadErrorAction(error));

                return of(false);
            });
    }

    getRepoFromAPI(name: string): Observable<IRepo | boolean> {

        return this.githubAPIService.retrieveRepo(name)
            .do((repo: IRepo) => this.store.dispatch(new LoadAction(repo)))
            .catch((error: Response) => {
                this.store.dispatch(new LoadErrorAction(error));
                return of(false);
            })
    }

}
