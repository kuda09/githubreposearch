import {Injectable} from '@angular/core';
import {of} from 'rxjs/observable/of';
import {Resolve, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {Repo} from "../../shared/models/repo";
import {Observable} from "rxjs";
import {GithubApiService} from "../../shared/services/github-api.service";
import {ApplicationState} from "../../store/index";
import {Store} from "@ngrx/store";
import {getRepoEntitySelector} from "../../store/selectors";
import {Response} from "@angular/http";
import {LoadErrorAction, LoadAction} from "../../store/actions/repo.actions";

import 'rxjs/add/operator/take';
import 'rxjs/add/operator/switchMap';


@Injectable()
export class RepoResolveService implements Resolve<Repo> {

    constructor(private githubAPIService: GithubApiService, private store: Store<ApplicationState>) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Repo>|Promise<Repo>|Repo {

        const repoName = route.params['owner'] + '/' + route.params['repoName'];

        return this.getRepoFromStore(repoName)
            .take(1)
            .switchMap((repo: Repo) => {
                if (repo) return of(repo);

                 return this.getRepoFromAPI(repoName)
            })
    }

    getRepoFromStore(name: string): Observable<Repo| boolean> {

        return this.store.select(getRepoEntitySelector)
            .map((repo: Repo) => {
                return repo && repo.full_name === name ? repo : false;
            })
            .catch((error: Response) => {

                this.store.dispatch(new LoadErrorAction(error));

                return of(false);
            });
    }

    getRepoFromAPI(name: string): Observable<Repo | boolean> {

        return this.githubAPIService.retrieveRepo(name)
            .do((repo: Repo) => this.store.dispatch(new LoadAction(repo)))
            .catch((error: Response) => {
                this.store.dispatch(new LoadErrorAction(error));
                return of(false);
            })
    }

}
