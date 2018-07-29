import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SbCirugiaComponent } from './sb-cirugia.component';

describe('SbCirugiaComponent', () => {
  let component: SbCirugiaComponent;
  let fixture: ComponentFixture<SbCirugiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SbCirugiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SbCirugiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
