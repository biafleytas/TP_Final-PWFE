import { TestBed } from '@angular/core/testing';

import { ServicedetalleService } from './servicedetalle.service';

describe('ServicedetalleService', () => {
  let service: ServicedetalleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicedetalleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
