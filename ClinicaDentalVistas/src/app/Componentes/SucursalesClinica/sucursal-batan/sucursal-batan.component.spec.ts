import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SucursalBatanComponent } from './sucursal-batan.component';

describe('SucursalBatanComponent', () => {
  let component: SucursalBatanComponent;
  let fixture: ComponentFixture<SucursalBatanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SucursalBatanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SucursalBatanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
