import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RepoComponent} from './components/repo/repo.component';
import {IssuesComponent} from './components/issues/issues.component';
import {CommitsComponent} from './components/commits/commits.component';
import {PullRequestsComponent} from './components/pull-requests/pull-requests.component';
import {RepoRoutingModule} from "./repo-routing.module";

@NgModule({
    imports: [
        CommonModule,
        RepoRoutingModule
    ],
    declarations: [
        RepoComponent,
        IssuesComponent,
        CommitsComponent,
        PullRequestsComponent
    ]
})
export class RepoModule {
}
