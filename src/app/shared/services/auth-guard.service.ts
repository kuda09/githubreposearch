import {Injectable} from "@angular/core";
import {CanActivate, Router} from "@angular/router";
import {Observable} from "rxjs";
import {LoginService} from "./login.service";

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private login: LoginService, private router: Router) {
    }

    canActivate(): Observable<boolean> | boolean {

        /*if(!this.auth.loggedIn()) {

         return true;
         }
         this.router.navigate(['login']);*/
        return false;
    }

}