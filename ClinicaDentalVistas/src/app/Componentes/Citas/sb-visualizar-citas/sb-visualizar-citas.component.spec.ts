import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SbVisualizarCitasComponent } from './sb-visualizar-citas.component';

describe('SbVisualizarCitasComponent', () => {
  let component: SbVisualizarCitasComponent;
  let fixture: ComponentFixture<SbVisualizarCitasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SbVisualizarCitasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SbVisualizarCitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
