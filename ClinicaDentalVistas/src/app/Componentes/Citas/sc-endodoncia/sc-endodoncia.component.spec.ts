import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScEndodonciaComponent } from './sc-endodoncia.component';

describe('ScEndodonciaComponent', () => {
  let component: ScEndodonciaComponent;
  let fixture: ComponentFixture<ScEndodonciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScEndodonciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScEndodonciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
