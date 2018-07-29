import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScConsultaComponent } from './sc-consulta.component';

describe('ScConsultaComponent', () => {
  let component: ScConsultaComponent;
  let fixture: ComponentFixture<ScConsultaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScConsultaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
