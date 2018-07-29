import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScOdontopediatriaComponent } from './sc-odontopediatria.component';

describe('ScOdontopediatriaComponent', () => {
  let component: ScOdontopediatriaComponent;
  let fixture: ComponentFixture<ScOdontopediatriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScOdontopediatriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScOdontopediatriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
