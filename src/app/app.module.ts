import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule, Http, RequestOptions} from '@angular/http';
import {ClarityModule} from "clarity-angular";
import {StoreModule} from "@ngrx/store";
import {AuthHttp} from "angular2-jwt";
import {RouterStoreModule} from "@ngrx/router-store";
import {MdCoreModule} from "@angular2-material/core";
import {NoopAnimationsModule} from "@angular/platform-browser/animations";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";

import {AuthModule} from "./auth/auth.module";

import {AppRoutingModule, appRoutingProviders} from './app-routing.module';

import {rootReducer, applicationInitialState} from "./store/index";

import {StorageService} from "./shared/services/storage.service";
import {AuthHttpServiceFactory} from "./shared/services/login.service";
import {GithubApiService} from "./shared/services/github-api.service";


import {AppComponent} from './app.component';
import {HeaderComponent} from './shared/components/header/header.component';
import {FooterComponent} from './shared/components/footer/footer.component';
import {ErrorAlertComponent} from './shared/components/error-alert/error-alert.component';


@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        ErrorAlertComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        AuthModule,
        MdCoreModule,
        HttpModule,
        AppRoutingModule,
        StoreModule.provideStore(rootReducer, applicationInitialState),
        RouterStoreModule.connectRouter(),
        NoopAnimationsModule,
        StoreDevtoolsModule.instrumentOnlyWithExtension(),
        ClarityModule.forRoot()
    ],
    providers: [
        GithubApiService,
        StorageService,
        appRoutingProviders,
        {
            provide: AuthHttp,
            useFactory: AuthHttpServiceFactory,
            deps: [Http, RequestOptions]

        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
