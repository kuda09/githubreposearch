import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {LoginComponent} from "./components/login/login.component";


const loginRoutes: Routes = [
    {
        path: '',
        component: LoginComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(loginRoutes),
    ],
    providers: [],
    exports: [RouterModule],
})
export class LoginRoutingModule {
}