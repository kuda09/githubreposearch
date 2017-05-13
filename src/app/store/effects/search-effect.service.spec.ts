import { TestBed, inject } from '@angular/core/testing';

import { SearchEffectService } from './search-effect.service';

describe('SearchEffectService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SearchEffectService]
    });
  });

  it('should ...', inject([SearchEffectService], (service: SearchEffectService) => {
    expect(service).toBeTruthy();
  }));
});
