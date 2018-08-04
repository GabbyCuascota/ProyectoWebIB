import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctoresNuevosComponent } from './doctores-nuevos.component';

describe('DoctoresNuevosComponent', () => {
  let component: DoctoresNuevosComponent;
  let fixture: ComponentFixture<DoctoresNuevosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctoresNuevosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctoresNuevosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
