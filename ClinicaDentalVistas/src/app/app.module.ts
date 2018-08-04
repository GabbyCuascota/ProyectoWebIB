import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {SucursalBatanComponent} from './Componentes/SucursalesClinica/sucursal-batan/sucursal-batan.component';
import {SucursalesComponent} from './Componentes/SucursalesClinica/sucursales/sucursales.component';
import {LoginComponent} from './Componentes/login/login.component';
import {RUTAS_APP} from "./app.routes";
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {HomeComponent} from './Componentes/home/home.component';
import {SucursalCumbayaComponent} from './Componentes/SucursalesClinica/sucursal-cumbaya/sucursal-cumbaya.component';
import {UsuariosComponent} from './Componentes/usuarios/usuarios.component';
import { RegistrarseComponent } from './Componentes/registrarse/registrarse.component';
import { SbCirugiaComponent } from './Componentes/Citas/sb-cirugia/sb-cirugia.component';
import { ConfirmarComponent } from './Componentes/Citas/confirmar/confirmar.component';
import { MensajeComponent } from './Componentes/Citas/mensaje/mensaje.component';
import { ScCirugiaComponent } from './Componentes/Citas/sc-cirugia/sc-cirugia.component';
import { SbEndodonciaComponent } from './Componentes/Citas/sb-endodoncia/sb-endodoncia.component';
import { ScEndodonciaComponent } from './Componentes/Citas/sc-endodoncia/sc-endodoncia.component';
import { SbOdontopediatriaComponent } from './Componentes/Citas/sb-odontopediatria/sb-odontopediatria.component';
import { ScOdontopediatriaComponent } from './Componentes/Citas/sc-odontopediatria/sc-odontopediatria.component';
import { SbOrtodonciaComponent } from './Componentes/Citas/sb-ortodoncia/sb-ortodoncia.component';
import { ScOrtodonciaComponent } from './Componentes/Citas/sc-ortodoncia/sc-ortodoncia.component';
import { SbRehabilitacionComponent } from './Componentes/Citas/sb-rehabilitacion/sb-rehabilitacion.component';
import { ScRehabilitacionComponent } from './Componentes/Citas/sc-rehabilitacion/sc-rehabilitacion.component';
import { SbConsultaComponent } from './Componentes/Citas/sb-consulta/sb-consulta.component';
import { ScConsultaComponent } from './Componentes/Citas/sc-consulta/sc-consulta.component';
import { SbPeriodonciaComponent } from './Componentes/Citas/sb-periodoncia/sb-periodoncia.component';
import { ScPeriodonciaComponent } from './Componentes/Citas/sc-periodoncia/sc-periodoncia.component';
import { OpcionesComponent } from './Componentes/opciones/opciones.component';
import { PacienteComponent } from './Componentes/PacientesOpciones/paciente/paciente.component';
import { DoctoresComponent } from './Componentes/DoctoresOpciones/doctores/doctores.component';
import { PacientesAntiguosComponent } from './Componentes/PacientesOpciones/pacientes-antiguos/pacientes-antiguos.component';
import { PacientesNuevosComponent } from './Componentes/PacientesOpciones/pacientes-nuevos/pacientes-nuevos.component';
import { DoctoresAntiguosComponent } from './Componentes/DoctoresOpciones/doctores-antiguos/doctores-antiguos.component';
import { DoctoresNuevosComponent } from './Componentes/DoctoresOpciones/doctores-nuevos/doctores-nuevos.component';
import { FichaClinicaComponent } from './Componentes/PacientesOpciones/ficha-clinica/ficha-clinica.component';
import { SbVisualizarCitasComponent } from './Componentes/Citas/sb-visualizar-citas/sb-visualizar-citas.component';
import { ScVisualizarCitasComponent } from './Componentes/Citas/sc-visualizar-citas/sc-visualizar-citas.component';

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
    ScPeriodonciaComponent,
    OpcionesComponent,
    PacienteComponent,
    DoctoresComponent,
    PacientesAntiguosComponent,
    PacientesNuevosComponent,
    DoctoresAntiguosComponent,
    DoctoresNuevosComponent,
    FichaClinicaComponent,
    SbVisualizarCitasComponent,
    ScVisualizarCitasComponent
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
