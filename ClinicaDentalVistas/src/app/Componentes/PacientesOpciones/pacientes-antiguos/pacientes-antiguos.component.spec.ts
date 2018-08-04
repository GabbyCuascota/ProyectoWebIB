import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PacientesAntiguosComponent } from './pacientes-antiguos.component';

describe('PacientesAntiguosComponent', () => {
  let component: PacientesAntiguosComponent;
  let fixture: ComponentFixture<PacientesAntiguosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PacientesAntiguosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PacientesAntiguosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
