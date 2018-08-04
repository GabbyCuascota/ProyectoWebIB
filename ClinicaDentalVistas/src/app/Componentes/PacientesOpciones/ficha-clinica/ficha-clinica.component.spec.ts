import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FichaClinicaComponent } from './ficha-clinica.component';

describe('FichaClinicaComponent', () => {
  let component: FichaClinicaComponent;
  let fixture: ComponentFixture<FichaClinicaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FichaClinicaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FichaClinicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
