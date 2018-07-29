import {Routes} from "@angular/router";
import {LoginComponent} from "./login/login.component";
import {HomeComponent} from "./home/home.component";
import {SucursalBatanComponent} from "./sucursal-batan/sucursal-batan.component";
import {SucursalCumbayaComponent} from "./sucursal-cumbaya/sucursal-cumbaya.component";
import {UsuariosComponent} from "./usuarios/usuarios.component";
import {RegistrarseComponent} from "./registrarse/registrarse.component";
import {SucursalesComponent} from "./sucursales/sucursales.component";
import {SbCirugiaComponent} from "./sb-cirugia/sb-cirugia.component";
import {ConfirmarComponent} from "./confirmar/confirmar.component";
import {MensajeComponent} from "./mensaje/mensaje.component";
import {ScCirugiaComponent} from "./sc-cirugia/sc-cirugia.component";
import {ScEndodonciaComponent} from "./sc-endodoncia/sc-endodoncia.component";
import {SbEndodonciaComponent} from "./sb-endodoncia/sb-endodoncia.component";
import {SbOdontopediatriaComponent} from "./sb-odontopediatria/sb-odontopediatria.component";
import {SbOrtodonciaComponent} from "./sb-ortodoncia/sb-ortodoncia.component";
import {SbPeriodonciaComponent} from "./sb-periodoncia/sb-periodoncia.component";
import {SbRehabilitacionComponent} from "./sb-rehabilitacion/sb-rehabilitacion.component";
import {SbConsultaComponent} from "./sb-consulta/sb-consulta.component";
import {ScOdontopediatriaComponent} from "./sc-odontopediatria/sc-odontopediatria.component";
import {ScOrtodonciaComponent} from "./sc-ortodoncia/sc-ortodoncia.component";
import {ScRehabilitacionComponent} from "./sc-rehabilitacion/sc-rehabilitacion.component";
import {ScPeriodonciaComponent} from "./sc-periodoncia/sc-periodoncia.component";
import {ScConsultaComponent} from "./sc-consulta/sc-consulta.component";

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
