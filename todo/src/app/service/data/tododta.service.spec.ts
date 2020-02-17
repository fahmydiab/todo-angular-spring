import { TestBed } from '@angular/core/testing';

import { TododtaService } from './tododta.service';

describe('TododtaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TododtaService = TestBed.get(TododtaService);
    expect(service).toBeTruthy();
  });
});
