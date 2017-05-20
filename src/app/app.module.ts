import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {ClarityModule} from "clarity-angular";
import {AppRoutingModule} from './app-routing.module';

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
        MdCoreModule,
        HttpModule,
        AppRoutingModule,
        StoreModule.provideStore(rootReducer, applicationInitialState),
        RouterStoreModule.connectRouter(),
        NoopAnimationsModule,
        StoreDevtoolsModule.instrumentOnlyWithExtension(),
        ClarityModule.forRoot()
    ],
    providers: [GithubApiService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
