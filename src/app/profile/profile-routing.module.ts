import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ProfileComponent} from "./components/profile/profile.component";
import {ProfileResolveService} from "./services/profile-resolve.service";


const profileRoutes: Routes = [
    {
        path: '',
        component: ProfileComponent,
        resolve: {
            profile: ProfileResolveService
        },
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(profileRoutes),
    ],
    providers: [
        ProfileResolveService,
    ],
    exports: [RouterModule],
})
export class RepoRoutingModule {
}