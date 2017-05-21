import {Injectable} from '@angular/core';
import {GithubApiService} from "../../shared/services/github-api.service";
import {ApplicationState} from "../../store/index";
import {Store} from "@ngrx/store";
import {ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {Repo} from "../../shared/models/repo";

@Injectable()
export class ProfileResolveService {

    constructor(private githubAPIService: GithubApiService, private store: Store<ApplicationState>) {
    }


    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {


    }


}
