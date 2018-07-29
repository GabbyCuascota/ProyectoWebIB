import {Component, OnInit} from '@angular/core';
import {SucursalesComponent} from "../sucursales/sucursales.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  clickSucursales: SucursalesComponent;
  mostrarComponente = false;

  cargarSucursales(evento) {
    console.log('evento', evento);
    this.mostrarComponente = true;
    if (this.clickSucursales.dioClick.emit(1)) {
      this.mostrarComponente = true;
      console.log(this.clickSucursales);
      return 1;

    } else {
      this.mostrarComponente = false;
      console.log(this.clickSucursales);
      return 0;
    }
  }
}
