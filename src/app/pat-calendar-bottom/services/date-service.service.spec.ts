import { TestBed, inject } from '@angular/core/testing';

import { DateService } from './date-service.service';

describe('DateServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DateService]
    });
  });

  it('should be created', inject([DateService], (service: DateService) => {
    expect(service).toBeTruthy();
  }));
});
