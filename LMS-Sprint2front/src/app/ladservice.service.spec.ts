import { TestBed } from '@angular/core/testing';

import { LadserviceService } from './ladservice.service';

describe('LadserviceService', () => {
  let service: LadserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LadserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
