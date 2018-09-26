import { TestBed, inject } from '@angular/core/testing';

import { WeeklyChallengeService } from './weekly-challenge.service';

describe('WeeklyChallengeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WeeklyChallengeService]
    });
  });

  it('should be created', inject([WeeklyChallengeService], (service: WeeklyChallengeService) => {
    expect(service).toBeTruthy();
  }));
});
