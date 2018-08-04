import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScRehabilitacionComponent } from './sc-rehabilitacion.component';

describe('ScRehabilitacionComponent', () => {
  let component: ScRehabilitacionComponent;
  let fixture: ComponentFixture<ScRehabilitacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScRehabilitacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScRehabilitacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
