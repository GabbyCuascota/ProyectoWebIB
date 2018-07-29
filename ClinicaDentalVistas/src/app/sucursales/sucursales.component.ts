import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-sucursales',
  templateUrl: './sucursales.component.html',
  styleUrls: ['./sucursales.component.css']
})
export class SucursalesComponent implements OnInit {

  constructor() {
  }

  @Output() dioClick = new EventEmitter();

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


  /* clickVisitar() {
     this.dioClick.emit(1);
   }*/

}
