import { TestBed } from '@angular/core/testing';

import { MyhttpclientService } from './spacexapi.service';

describe('MyhttpclientService', () => {
  let service: MyhttpclientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyhttpclientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
