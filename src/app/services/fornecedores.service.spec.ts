import { TestBed } from '@angular/core/testing';

import { FornecedoresService } from './fornecedores.service';

describe('FornecedoresService', () => {
  let service: FornecedoresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FornecedoresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
