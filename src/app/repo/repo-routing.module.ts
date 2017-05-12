import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RepoComponent} from "./components/repo/repo.component";
import {RepoResolveService} from "./services/repo-resolve.service";


const repositoryRoutes: Routes = [
    {
        path: ':owner/:repoName',
        component: RepoComponent,
        resolve: {
            repository: RepoResolveService
        },
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(repositoryRoutes),
    ],
    providers: [
        RepoResolveService,
    ],
    exports: [RouterModule],
})
export class RepoRoutingModule { }