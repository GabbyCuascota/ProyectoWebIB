import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScPeriodonciaComponent } from './sc-periodoncia.component';

describe('ScPeriodonciaComponent', () => {
  let component: ScPeriodonciaComponent;
  let fixture: ComponentFixture<ScPeriodonciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScPeriodonciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScPeriodonciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
