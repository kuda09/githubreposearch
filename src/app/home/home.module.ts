import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './components/home/home.component';
import {TagsComponent} from './components/tags/tags.component';
import {HomeRoutingModule} from "./home-routing.module";
import {HomeEffectService} from "../store/effects/home-effect.service";
import {EffectsModule} from "@ngrx/effects";
import {HomeService} from "./services/home.service";
import {TrendingComponent} from "./components/trending/trending.component";
import {MdListModule} from "@angular/material";
import {TrendingCardComponent} from './components/trending-card/trending-card.component';
import {TagCloudModule} from 'angular-tag-cloud-module';

@NgModule({
    imports: [
        CommonModule,
        TagCloudModule,
        MdListModule,
        EffectsModule.run(HomeEffectService),
        HomeRoutingModule
    ],
    declarations: [
        HomeComponent,
        TrendingComponent,
        TagsComponent,
        TrendingCardComponent
    ],
    providers: [
        HomeService
    ]
})
export class HomeModule {
}
