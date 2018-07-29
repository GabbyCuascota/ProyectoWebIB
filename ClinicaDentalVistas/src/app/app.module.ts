import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {SucursalBatanComponent} from './sucursal-batan/sucursal-batan.component';
import {SucursalesComponent} from './sucursales/sucursales.component';
import {LoginComponent} from './login/login.component';
import {AppRoutingModule, RUTAS_APP} from "./app.routes";
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {HomeComponent} from './home/home.component';
import {SucursalCumbayaComponent} from './sucursal-cumbaya/sucursal-cumbaya.component';
import { UsuariosComponent } from './usuarios/usuarios.component';

@NgModule({
  declarations: [
    AppComponent,
    SucursalBatanComponent,
    SucursalesComponent,
    LoginComponent,
    HomeComponent,
    SucursalCumbayaComponent,
    UsuariosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      RUTAS_APP,
      {
        useHash: true
      }
    ),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
