import { TestBed } from '@angular/core/testing';

import { BebidasService } from './bebidas.service';

describe('BebidasService', () => {
  let service: BebidasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BebidasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
