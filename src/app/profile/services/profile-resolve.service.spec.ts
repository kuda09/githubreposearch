import {TestBed, inject} from '@angular/core/testing';

import {ProfileResolveService} from './profile-resolve.service';

describe('ProfileResolveService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [ProfileResolveService]
        });
    });

    it('should ...', inject([ProfileResolveService], (service: ProfileResolveService) => {
        expect(service).toBeTruthy();
    }));
});
