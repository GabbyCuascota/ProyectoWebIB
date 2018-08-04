import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {SucursalBatanComponent} from "../../../ClinicaDentalVistas/src/app/Componentes/SucursalesClinica/sucursal-batan/sucursal-batan.component";


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
export class AppModule {
}
