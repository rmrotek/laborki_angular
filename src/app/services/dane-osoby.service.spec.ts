import { TestBed } from '@angular/core/testing';

import { DaneOsobyService } from './dane-osoby.service';

describe('DaneOsobyService', () => {
  let service: DaneOsobyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DaneOsobyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
