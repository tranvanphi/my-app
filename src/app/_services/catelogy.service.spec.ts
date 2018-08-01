import { TestBed, inject } from '@angular/core/testing';

import { CatelogyService } from './catelogy.service';

describe('CatelogyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CatelogyService]
    });
  });

  it('should be created', inject([CatelogyService], (service: CatelogyService) => {
    expect(service).toBeTruthy();
  }));
});
