import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SbConsultaComponent } from './sb-consulta.component';

describe('SbConsultaComponent', () => {
  let component: SbConsultaComponent;
  let fixture: ComponentFixture<SbConsultaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SbConsultaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SbConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
