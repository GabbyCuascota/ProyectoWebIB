import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SbOrtodonciaComponent } from './sb-ortodoncia.component';

describe('SbOrtodonciaComponent', () => {
  let component: SbOrtodonciaComponent;
  let fixture: ComponentFixture<SbOrtodonciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SbOrtodonciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SbOrtodonciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
