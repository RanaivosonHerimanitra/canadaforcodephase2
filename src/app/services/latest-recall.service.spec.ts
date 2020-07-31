import { TestBed } from '@angular/core/testing';

import { LatestRecallService } from './latest-recall.service';

describe('LatestRecallService', () => {
  let service: LatestRecallService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LatestRecallService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
