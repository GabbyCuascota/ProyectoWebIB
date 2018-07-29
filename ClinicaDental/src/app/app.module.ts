import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SucursalBatanComponent } from './ClinicaVistas/sucursal-batan/sucursal-batan.component';

@NgModule({
  declarations: [
    AppComponent,
    SucursalBatanComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
