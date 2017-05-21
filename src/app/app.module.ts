import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule, Http, RequestOptions} from '@angular/http';
import {ClarityModule} from "clarity-angular";
import {AppRoutingModule, appRoutingProviders} from './app-routing.module';

import {AppComponent} from './app.component';
import {HeaderComponent} from './shared/components/header/header.component';
import {FooterComponent} from './shared/components/footer/footer.component';
import {ErrorAlertComponent} from './shared/components/error-alert/error-alert.component'
import {GithubApiService} from "./shared/services/github-api.service";
import {StoreModule} from "@ngrx/store";
import {rootReducer, applicationInitialState} from "./store/index";
import {RouterStoreModule} from "@ngrx/router-store";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {MdCoreModule} from "@angular2-material/core";
import {NoopAnimationsModule} from "@angular/platform-browser/animations";
import {AuthModule} from "./auth/auth.module";
import {AuthHttp} from "angular2-jwt";
import {AuthHttpServiceFactory} from "./shared/services/login.service";
import {ProfileComponent} from './profile/components/profile/profile.component';


@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        ErrorAlertComponent,
        ProfileComponent
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
