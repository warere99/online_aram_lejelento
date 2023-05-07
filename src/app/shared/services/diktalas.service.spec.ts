import { TestBed } from '@angular/core/testing';

import { DiktalasService } from './diktalas.service';

describe('DiktalasService', () => {
  let service: DiktalasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DiktalasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
