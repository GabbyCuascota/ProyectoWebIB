import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PacientesNuevosComponent } from './pacientes-nuevos.component';

describe('PacientesNuevosComponent', () => {
  let component: PacientesNuevosComponent;
  let fixture: ComponentFixture<PacientesNuevosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PacientesNuevosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PacientesNuevosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
