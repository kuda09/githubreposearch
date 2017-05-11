import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import {SearchRoutingModule} from "./search-routing.module";
import { SearchCardComponent } from './search-card/search-card.component';
import { RepoListComponent } from './repo-list/repo-list.component';
import { RepoCardComponent } from './repo-card/repo-card.component';
import { TrendingComponent } from './trending/trending.component';

@NgModule({
  imports: [
    CommonModule,
    SearchRoutingModule
  ],
  declarations: [SearchComponent, SearchCardComponent, RepoListComponent, RepoCardComponent, TrendingComponent]
})
export class SearchModule { }
