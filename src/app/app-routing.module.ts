import {NgModule, ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';
import {AuthGuard} from "./shared/services/auth-guard.service";
import {LoginService} from "./shared/services/login.service";


const appRoutes: Routes = [
    {
        path: '',
        loadChildren: './home/home.module#HomeModule',
    },
    {
        path: 'login',
        loadChildren: './login/login.module#LoginModule',
    },
    {
        path: 'search',
        loadChildren: './search/search.module#SearchModule',
    },
    {
        path: 'profile',
        loadChildren: './profile/profile.module#ProfileModule',
    },
    {
        path: 'repo',
        loadChildren: './repo/repo.module#RepoModule',
    }
];

export const appRoutingProviders: any[] = [
    [AuthGuard, LoginService]
];


@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules}/**/),
    ],
    exports: [RouterModule],
    providers: [AuthGuard, LoginService]
})
export class AppRoutingModule {
}