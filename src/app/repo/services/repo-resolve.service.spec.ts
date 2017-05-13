import { TestBed, inject } from '@angular/core/testing';

import { RepoResolveService } from './repo-resolve.service';

describe('RepoResolveService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RepoResolveService]
    });
  });

  it('should ...', inject([RepoResolveService], (service: RepoResolveService) => {
    expect(service).toBeTruthy();
  }));
});
