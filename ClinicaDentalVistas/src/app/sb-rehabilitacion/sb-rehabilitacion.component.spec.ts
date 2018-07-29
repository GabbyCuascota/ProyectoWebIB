import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SbRehabilitacionComponent } from './sb-rehabilitacion.component';

describe('SbRehabilitacionComponent', () => {
  let component: SbRehabilitacionComponent;
  let fixture: ComponentFixture<SbRehabilitacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SbRehabilitacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SbRehabilitacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
