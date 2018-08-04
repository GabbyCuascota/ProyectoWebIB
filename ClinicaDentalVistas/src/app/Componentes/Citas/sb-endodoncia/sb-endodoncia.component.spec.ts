import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SbEndodonciaComponent } from './sb-endodoncia.component';

describe('SbEndodonciaComponent', () => {
  let component: SbEndodonciaComponent;
  let fixture: ComponentFixture<SbEndodonciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SbEndodonciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SbEndodonciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
