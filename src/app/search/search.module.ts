import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SearchComponent} from './search/search.component';
import {SearchRoutingModule} from "./search-routing.module";
import {SearchCardComponent} from './search-card/search-card.component';
import {RepoListComponent} from './repo-list/repo-list.component';
import {RepoCardComponent} from './repo-card/repo-card.component';
import {SearchService} from "./services/search.service";
import {EffectsModule} from "@ngrx/effects";
import {SearchEffectService} from "../store/effects/search-effect.service";
import {MdListModule} from "@angular/material";

@NgModule({
    imports: [
        CommonModule,
        SearchRoutingModule,
        MdListModule,
        EffectsModule.run(SearchEffectService)
    ],
    providers: [SearchService],
    declarations: [
        SearchComponent,
        SearchCardComponent,
        RepoListComponent,
        RepoCardComponent
    ]
})
export class SearchModule {
}
