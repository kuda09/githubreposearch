import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RepoComponent} from './components/repo/repo.component';
import {IssuesComponent} from './components/issues/issues.component';
import {CommitsComponent} from './components/commits/commits.component';
import {PullRequestsComponent} from './components/pull-requests/pull-requests.component';
import {RepoRoutingModule} from "./repo-routing.module";
import {RepoCardComponent} from './components/repo-card/repo-card.component';
import {MdTabsModule} from "@angular/material";
import {RepoService} from "./services/repo.service";
import {EffectsModule} from "@ngrx/effects";
import {RepoEffectService} from "../store/effects/repo-effect.service";
import {AmChartsModule} from "@amcharts/amcharts3-angular";

@NgModule({
    imports: [
        CommonModule,
        AmChartsModule,
        MdTabsModule,
        EffectsModule.run(RepoEffectService),
        RepoRoutingModule
    ],
    declarations: [
        RepoComponent,
        IssuesComponent,
        CommitsComponent,
        PullRequestsComponent,
        RepoCardComponent
    ],
    providers: [
        RepoService
    ]
})
export class RepoModule {
}
