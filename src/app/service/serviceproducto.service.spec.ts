import { TestBed } from '@angular/core/testing';

import { ServiceproductoService } from './serviceproducto.service';

describe('ServiceproductoService', () => {
  let service: ServiceproductoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceproductoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
