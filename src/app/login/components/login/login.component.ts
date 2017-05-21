import {Component, OnInit} from '@angular/core';
import {LoginService} from "../../services/login.service";
import {config} from "../../../shared/config";
import {ActivatedRoute, Params} from "@angular/router";

import 'rxjs/add/operator/take';


@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


    constructor(private loginService: LoginService, private route: ActivatedRoute) {
    }

    ngOnInit() {

        this.route.queryParams
            .map((params: Params) => params['code'])
            .take(1)
            .subscribe(code => {

                if (code === undefined) return;
                this.loginService.login(code)
            })

    }

    login() {

        //this.loginService.login();

        window.location.href = `https://github.com/login/oauth/authorize?client_id=${config.GITHUB_API_CLIENT_ID}&client_secret=${config.GITHUB_API_CLIENT_SECRET}&allow_signup=true&state=${config.state}`

    }

}
