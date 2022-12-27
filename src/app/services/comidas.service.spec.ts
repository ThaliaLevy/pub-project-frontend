import { TestBed } from '@angular/core/testing';

import { ComidasService } from './comidas.service';

describe('ComidasService', () => {
  let service: ComidasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComidasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
