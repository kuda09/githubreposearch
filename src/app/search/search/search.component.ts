import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {IRepo} from "../../common/models/repo";
import {ActivatedRoute, Params} from "@angular/router";
import {SearchService} from "../services/search.service";

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/combineLatest';


@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchQuery$: Observable<string>;
  isLoading$: Observable<boolean>;
  repos$: Observable<IRepo[]>;
  trending$: Observable<IRepo[]>;
  noResults$: Observable<boolean>;

  constructor(
      private searchService: SearchService,
      private route: ActivatedRoute
  ) { }

  ngOnInit() {

    this.searchQuery$ = this.searchService.getSearchQuery();
    this.isLoading$ = this.searchService.isLoading();
    this.repos$ = this.searchService.getRepos();
    this.trending$ = this.searchService.getTrending();

    this.initialSearch();
    this.searchService.loadTrending();
  }


  performSearch(query) {

    this.searchService.performSearch(query);
  }

  initialSearch() {

    this.route.queryParams
        .map((params: Params) => params['q'])
        .combineLatest(this.repos$)
        .take(1)
        .subscribe(combined => {

          const [q, repos] = combined;

          if(repos.length) return;

          this.performSearch(q);

        })
  }

}
