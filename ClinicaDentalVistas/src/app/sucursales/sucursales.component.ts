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

  /* clickVisitar() {
     this.dioClick.emit(1);
   }*/

}
