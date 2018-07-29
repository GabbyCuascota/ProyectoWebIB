import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {SucursalBatanComponent} from './sucursal-batan/sucursal-batan.component';
import {SucursalesComponent} from './sucursales/sucursales.component';
import {LoginComponent} from './login/login.component';
import {RUTAS_APP} from "./app.routes";
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {HomeComponent} from './home/home.component';
import {SucursalCumbayaComponent} from './sucursal-cumbaya/sucursal-cumbaya.component';
import {UsuariosComponent} from './usuarios/usuarios.component';
import { RegistrarseComponent } from './registrarse/registrarse.component';
import { SbCirugiaComponent } from './sb-cirugia/sb-cirugia.component';
import { ConfirmarComponent } from './confirmar/confirmar.component';
import { MensajeComponent } from './mensaje/mensaje.component';
import { ScCirugiaComponent } from './sc-cirugia/sc-cirugia.component';
import { SbEndodonciaComponent } from './sb-endodoncia/sb-endodoncia.component';
import { ScEndodonciaComponent } from './sc-endodoncia/sc-endodoncia.component';
import { SbOdontopediatriaComponent } from './sb-odontopediatria/sb-odontopediatria.component';
import { ScOdontopediatriaComponent } from './sc-odontopediatria/sc-odontopediatria.component';
import { SbOrtodonciaComponent } from './sb-ortodoncia/sb-ortodoncia.component';
import { ScOrtodonciaComponent } from './sc-ortodoncia/sc-ortodoncia.component';
import { SbRehabilitacionComponent } from './sb-rehabilitacion/sb-rehabilitacion.component';
import { ScRehabilitacionComponent } from './sc-rehabilitacion/sc-rehabilitacion.component';
import { SbConsultaComponent } from './sb-consulta/sb-consulta.component';
import { ScConsultaComponent } from './sc-consulta/sc-consulta.component';
import { SbPeriodonciaComponent } from './sb-periodoncia/sb-periodoncia.component';
import { ScPeriodonciaComponent } from './sc-periodoncia/sc-periodoncia.component';

@NgModule({
  declarations: [
    AppComponent,
    SucursalBatanComponent,
    SucursalesComponent,
    LoginComponent,
    HomeComponent,
    SucursalCumbayaComponent,
    UsuariosComponent,
    RegistrarseComponent,
    SbCirugiaComponent,
    ConfirmarComponent,
    MensajeComponent,
    ScCirugiaComponent,
    SbEndodonciaComponent,
    ScEndodonciaComponent,
    SbOdontopediatriaComponent,
    ScOdontopediatriaComponent,
    SbOrtodonciaComponent,
    ScOrtodonciaComponent,
    SbRehabilitacionComponent,
    ScRehabilitacionComponent,
    SbConsultaComponent,
    ScConsultaComponent,
    SbPeriodonciaComponent,
    ScPeriodonciaComponent
  ],
  imports: [
    BrowserModule, FormsModule, RouterModule.forRoot(
      RUTAS_APP,
      {
        useHash: true
      }
    ),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
