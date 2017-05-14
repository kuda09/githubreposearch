import { TestBed, inject } from '@angular/core/testing';

import { SearchService } from './search.service';
import {StoreModule} from "@ngrx/store";
import {rootReducer, applicationInitialState} from "../../store/index";

describe('SearchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[StoreModule.provideStore(rootReducer, applicationInitialState)],
      providers: [SearchService]
    });
  });

  it('should have all the methods', inject([SearchService], (service: SearchService) => {
    expect(service).toBeTruthy();
    expect(service.getRepos()).toBeTruthy();
    expect(service.getTrending()).toBeTruthy();
    expect(service.getSearchQuery()).toBeTruthy();
    expect(service.loadTrending()).toBeTruthy();
    expect(service.performSearch('angular')).toBeTruthy();
  }));
});
