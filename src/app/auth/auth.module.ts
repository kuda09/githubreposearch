import {NgModule} from '@angular/core';
import {RouterModule} from "@angular/router";
import {AuthHttp} from "angular2-jwt";
import {Http, RequestOptions} from "@angular/http";
import {AuthHttpServiceFactory} from "../shared/services/login.service";


@NgModule({
    imports: [],
    exports: [RouterModule],
    providers: [
        {
            provide: AuthHttp,
            useFactory: AuthHttpServiceFactory,
            deps: [Http, RequestOptions]
        }
    ],
    declarations: []
})
export class AuthModule {
}
