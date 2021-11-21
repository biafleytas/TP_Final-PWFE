import { TestBed } from '@angular/core/testing';

import { ServiceventaService } from './serviceventa.service';

describe('ServiceventaService', () => {
  let service: ServiceventaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceventaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
