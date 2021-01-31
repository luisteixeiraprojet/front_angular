import { TestBed } from '@angular/core/testing';

import { BetweenComponentsService } from './between-components.service';

describe('BetweenComponentsService', () => {
  let service: BetweenComponentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BetweenComponentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
