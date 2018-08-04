import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SbPeriodonciaComponent } from './sb-periodoncia.component';

describe('SbPeriodonciaComponent', () => {
  let component: SbPeriodonciaComponent;
  let fixture: ComponentFixture<SbPeriodonciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SbPeriodonciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SbPeriodonciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
