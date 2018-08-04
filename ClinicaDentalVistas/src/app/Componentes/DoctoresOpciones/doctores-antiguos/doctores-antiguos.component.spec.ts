import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctoresAntiguosComponent } from './doctores-antiguos.component';

describe('DoctoresAntiguosComponent', () => {
  let component: DoctoresAntiguosComponent;
  let fixture: ComponentFixture<DoctoresAntiguosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctoresAntiguosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctoresAntiguosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
