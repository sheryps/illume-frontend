import { TestBed } from '@angular/core/testing';

import { ControlservicesService } from './controlservices.service';

describe('ControlservicesService', () => {
  let service: ControlservicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ControlservicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
