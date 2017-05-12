import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SearchComponent} from "./search/search.component";


const searchRoutes: Routes = [
    {
        path: '',
        component: SearchComponent
    },
];

@NgModule({
    imports: [
        RouterModule.forChild(searchRoutes),
    ],
    exports: [RouterModule],
    providers: []
})
export class SearchRoutingModule { }