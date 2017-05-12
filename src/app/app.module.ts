import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {ClarityModule} from "clarity-angular";
import { AppRoutingModule } from './app-routing.module';
import {EffectsModule} from "@ngrx/effects";

import {AppComponent} from './app.component';
import {HeaderComponent} from './common/components/header/header.component';
import {FooterComponent} from './common/components/footer/footer.component';
import {ErrorAlertComponent} from './common/components/error-alert/error-alert.component'
import {GithubApiService} from "./common/services/github-api.service";
import {StoreModule} from "@ngrx/store";
import {rootReducer, applicationInitialState} from "./store/index";
import {RouterStoreModule} from "@ngrx/router-store";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";


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
        HttpModule,
        AppRoutingModule,
        StoreModule.provideStore(rootReducer, applicationInitialState),
        RouterStoreModule.connectRouter(),
        StoreDevtoolsModule.instrumentOnlyWithExtension(),
        ClarityModule.forRoot()
    ],
    providers: [ GithubApiService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
