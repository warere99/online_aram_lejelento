import { TestBed } from '@angular/core/testing';

import { MerooraService } from './meroora.service';

describe('MerooraService', () => {
  let service: MerooraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MerooraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
