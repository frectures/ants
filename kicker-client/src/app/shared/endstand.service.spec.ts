import { TestBed, inject } from '@angular/core/testing';

import { EndstandService } from './endstand.service';

describe('EndstandService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EndstandService]
    });
  });

  it('should be created', inject([EndstandService], (service: EndstandService) => {
    expect(service).toBeTruthy();
  }));
});
