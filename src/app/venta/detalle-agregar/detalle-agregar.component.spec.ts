import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleAgregarComponent } from './detalle-agregar.component';

describe('DetalleAgregarComponent', () => {
  let component: DetalleAgregarComponent;
  let fixture: ComponentFixture<DetalleAgregarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleAgregarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleAgregarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
