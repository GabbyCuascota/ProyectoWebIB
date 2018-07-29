import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SucursalCumbayaComponent } from './sucursal-cumbaya.component';

describe('SucursalCumbayaComponent', () => {
  let component: SucursalCumbayaComponent;
  let fixture: ComponentFixture<SucursalCumbayaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SucursalCumbayaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SucursalCumbayaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
