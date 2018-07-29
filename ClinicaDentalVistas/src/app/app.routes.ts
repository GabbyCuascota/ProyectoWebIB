import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "./login/login.component";
import {NgModule} from "@angular/core";
import {HomeComponent} from "./home/home.component";
import {SucursalBatanComponent} from "./sucursal-batan/sucursal-batan.component";
import {SucursalCumbayaComponent} from "./sucursal-cumbaya/sucursal-cumbaya.component";
import {UsuariosComponent} from "./usuarios/usuarios.component";

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
    path: 'sucursal-batan',
    component: SucursalBatanComponent,
  },
  {
    path: 'sucursal-cumbaya',
    component: SucursalCumbayaComponent,
  },
  {
    path: 'usuarios',
    component: UsuariosComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(RUTAS_APP)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
