import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';


const appRoutes: Routes = [
    {
        path:         '',
        loadChildren: './search/search.module#SearchModule',
    },
    {
        path:         'repo',
        loadChildren: './repo/repo.module#RepoModule',
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules }/**/),
    ],
    exports: [RouterModule],
    providers: []
})
export class AppRoutingModule { }