import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScVisualizarCitasComponent } from './sc-visualizar-citas.component';

describe('ScVisualizarCitasComponent', () => {
  let component: ScVisualizarCitasComponent;
  let fixture: ComponentFixture<ScVisualizarCitasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScVisualizarCitasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScVisualizarCitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
