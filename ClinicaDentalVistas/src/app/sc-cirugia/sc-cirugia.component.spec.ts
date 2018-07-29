import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScCirugiaComponent } from './sc-cirugia.component';

describe('ScCirugiaComponent', () => {
  let component: ScCirugiaComponent;
  let fixture: ComponentFixture<ScCirugiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScCirugiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScCirugiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
