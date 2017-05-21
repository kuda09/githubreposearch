import {Injectable} from '@angular/core';
import {Http, RequestOptions} from "@angular/http";

import {StorageService} from "./storage.service";
import {AuthConfig, AuthHttp, JwtHelper} from "angular2-jwt";
import {Observable} from "rxjs";

const storage = new StorageService();

const authConfig = {
    tokenName: 'token',
    tokenGetter: (() => storage.getStorage('token')),
    globalHeaders: [{'Content-Type': 'application/json'}]
}

export function AuthHttpServiceFactory(http: Http, options: RequestOptions) {

    return new AuthHttp(new AuthConfig(authConfig), http, options);
}

@Injectable()
export class LoginService {

    jwtHelper: JwtHelper = new JwtHelper();

    constructor() {

    }

    loggedIn() {

        const token = storage.getStorage('token');

        if (token === null) {
            return true;
        }
        return this.jwtHelper.isTokenExpired(token);
    }

}
