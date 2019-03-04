import { TestBed, inject } from '@angular/core/testing';

import { AbcdService } from './abcd.service';

describe('AbcdService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AbcdService]
    });
  });

  it('should be created', inject([AbcdService], (service: AbcdService) => {
    expect(service).toBeTruthy();
  }));
});
