import { TestBed } from '@angular/core/testing';

import { FelhasznalasihelyService } from './felhasznalasihely.service';

describe('FelhasznalasihelyService', () => {
  let service: FelhasznalasihelyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FelhasznalasihelyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
