import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScOrtodonciaComponent } from './sc-ortodoncia.component';

describe('ScOrtodonciaComponent', () => {
  let component: ScOrtodonciaComponent;
  let fixture: ComponentFixture<ScOrtodonciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScOrtodonciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScOrtodonciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
