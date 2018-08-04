import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SbOdontopediatriaComponent } from './sb-odontopediatria.component';

describe('SbOdontopediatriaComponent', () => {
  let component: SbOdontopediatriaComponent;
  let fixture: ComponentFixture<SbOdontopediatriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SbOdontopediatriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SbOdontopediatriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
