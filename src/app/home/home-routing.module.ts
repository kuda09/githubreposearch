import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from "./components/home/home.component";


const homeRoutes: Routes = [
    {
        path: '',
        component: HomeComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(homeRoutes),
    ],
    providers: [],
    exports: [RouterModule],
})
export class HomeRoutingModule {
}