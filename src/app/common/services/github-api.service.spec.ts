import { TestBed, inject } from '@angular/core/testing';

import { GithubApiService } from './github-api.service';

describe('GithubApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GithubApiService]
    });
  });

  it('should instantiate ...', inject([GithubApiService], (service: GithubApiService) => {
    expect(service).toBeTruthy();
  }));
});
