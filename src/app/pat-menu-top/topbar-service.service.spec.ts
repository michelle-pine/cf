import { TestBed, inject } from '@angular/core/testing';

import { TopbarService } from './topbar-service.service';

describe('TopbarServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TopbarService]
    });
  });

  it('should be created', inject([TopbarService], (service: TopbarService) => {
    expect(service).toBeTruthy();
  }));
});
