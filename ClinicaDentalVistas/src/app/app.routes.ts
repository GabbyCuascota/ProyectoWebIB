import {Routes} from "@angular/router";
import {LoginComponent} from "./Componentes/login/login.component";
import {HomeComponent} from "./Componentes/home/home.component";
import {SucursalBatanComponent} from "./Componentes/SucursalesClinica/sucursal-batan/sucursal-batan.component";
import {SucursalCumbayaComponent} from "./Componentes/SucursalesClinica/sucursal-cumbaya/sucursal-cumbaya.component";
import {UsuariosComponent} from "./Componentes/usuarios/usuarios.component";
import {RegistrarseComponent} from "./Componentes/registrarse/registrarse.component";
import {SucursalesComponent} from "./Componentes/SucursalesClinica/sucursales/sucursales.component";
import {SbCirugiaComponent} from "./Componentes/Citas/sb-cirugia/sb-cirugia.component";
import {ConfirmarComponent} from "./Componentes/Citas/confirmar/confirmar.component";
import {MensajeComponent} from "./Componentes/Citas/mensaje/mensaje.component";
import {ScCirugiaComponent} from "./Componentes/Citas/sc-cirugia/sc-cirugia.component";
import {ScEndodonciaComponent} from "./Componentes/Citas/sc-endodoncia/sc-endodoncia.component";
import {SbEndodonciaComponent} from "./Componentes/Citas/sb-endodoncia/sb-endodoncia.component";
import {SbOdontopediatriaComponent} from "./Componentes/Citas/sb-odontopediatria/sb-odontopediatria.component";
import {SbOrtodonciaComponent} from "./Componentes/Citas/sb-ortodoncia/sb-ortodoncia.component";
import {SbPeriodonciaComponent} from "./Componentes/Citas/sb-periodoncia/sb-periodoncia.component";
import {SbRehabilitacionComponent} from "./Componentes/Citas/sb-rehabilitacion/sb-rehabilitacion.component";
import {SbConsultaComponent} from "./Componentes/Citas/sb-consulta/sb-consulta.component";
import {ScOdontopediatriaComponent} from "./Componentes/Citas/sc-odontopediatria/sc-odontopediatria.component";
import {ScOrtodonciaComponent} from "./Componentes/Citas/sc-ortodoncia/sc-ortodoncia.component";
import {ScRehabilitacionComponent} from "./Componentes/Citas/sc-rehabilitacion/sc-rehabilitacion.component";
import {ScPeriodonciaComponent} from "./Componentes/Citas/sc-periodoncia/sc-periodoncia.component";
import {ScConsultaComponent} from "./Componentes/Citas/sc-consulta/sc-consulta.component";
import {OpcionesComponent} from "./Componentes/opciones/opciones.component";
import {PacienteComponent} from "./Componentes/PacientesOpciones/paciente/paciente.component";
import {PacientesAntiguosComponent} from "./Componentes/PacientesOpciones/pacientes-antiguos/pacientes-antiguos.component";
import {PacientesNuevosComponent} from "./Componentes/PacientesOpciones/pacientes-nuevos/pacientes-nuevos.component";
import {DoctoresComponent} from "./Componentes/DoctoresOpciones/doctores/doctores.component";
import {DoctoresAntiguosComponent} from "./Componentes/DoctoresOpciones/doctores-antiguos/doctores-antiguos.component";
import {DoctoresNuevosComponent} from "./Componentes/DoctoresOpciones/doctores-nuevos/doctores-nuevos.component";
import {FichaClinicaComponent} from "./Componentes/PacientesOpciones/ficha-clinica/ficha-clinica.component";
import {SbVisualizarCitasComponent} from "./Componentes/Citas/sb-visualizar-citas/sb-visualizar-citas.component";
import {ScVisualizarCitasComponent} from "./Componentes/Citas/sc-visualizar-citas/sc-visualizar-citas.component";

export const RUTAS_APP: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'registrarse',
    component: RegistrarseComponent,
  },
  {
    path: 'opciones',
    component: OpcionesComponent,
  },
  {
    path: 'paciente',
    component: PacienteComponent,
  },
  {
    path: 'pacientes-antiguos',
    component: PacientesAntiguosComponent,
  },
  {
    path: 'pacientes-nuevos',
    component: PacientesNuevosComponent,
  },
  {
    path: 'ficha-clinica',
    component: FichaClinicaComponent,
  },
  {
    path: 'doctores',
    component: DoctoresComponent,
  },
  {
    path: 'doctores-antiguos',
    component: DoctoresAntiguosComponent,
  },
  {
    path: 'doctores-nuevos',
    component: DoctoresNuevosComponent,
  },
  {
    path: 'sucursales',
    component: SucursalesComponent,
  },
  {
    path: 'sucursal-batan',
    component: SucursalBatanComponent,
  },
  {
    path: 'sb-cirugia',
    component: SbCirugiaComponent,
  },
  {
    path: 'sb-endodoncia',
    component: SbEndodonciaComponent,
  },
  {
    path: 'sb-odontopediatria',
    component: SbOdontopediatriaComponent,
  },
  {
    path: 'sb-ortodoncia',
    component: SbOrtodonciaComponent,
  },
  {
    path: 'sb-periodoncia',
    component: SbPeriodonciaComponent,
  },
  {
    path: 'sb-rehabilitacion',
    component: SbRehabilitacionComponent,
  },
  {
    path: 'sb-consulta',
    component: SbConsultaComponent,
  },
  {
    path: 'sb-visualizar-citas',
    component: SbVisualizarCitasComponent,
  },
  {
    path: 'sucursal-cumbaya',
    component: SucursalCumbayaComponent,
  },
  {
    path: 'sc-cirugia',
    component: ScCirugiaComponent,
  },
  {
    path: 'sc-endodoncia',
    component: ScEndodonciaComponent,
  },
  {
    path: 'sc-odontopediatria',
    component: ScOdontopediatriaComponent,
  },
  {
    path: 'sc-ortodoncia',
    component: ScOrtodonciaComponent,
  },
  {
    path: 'sc-periodoncia',
    component: ScPeriodonciaComponent,
  },
  {
    path: 'sc-rehabilitacion',
    component: ScRehabilitacionComponent,
  },
  {
    path: 'sc-consulta',
    component: ScConsultaComponent,
  },
  {
    path: 'sc-visualizar-citas',
    component: ScVisualizarCitasComponent,
  },
  {
    path: 'confirmar',
    component: ConfirmarComponent,
  },
  {
    path: 'mensaje',
    component: MensajeComponent,
  },
  {
    path: 'usuarios',
    component: UsuariosComponent,
  }
];

/*@NgModule({
  imports: [RouterModule.forRoot(RUTAS_APP)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
*/
