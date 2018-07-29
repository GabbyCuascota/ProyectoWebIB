import {Component} from "@angular/core";
import {NgbDateStruct} from "@ng-bootstrap/ng-bootstrap";


const now = new Date();

@Component({

  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
})
export class CalendarioComponent {
  model: NgbDateStruct;
  date: { year: number, month: number };


  selectToday() {
    this.model = {year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate()};
  }

  time = {hour: 13, minute: 30};
  meridian = true;

  toggleMeridian() {
    this.meridian = !this.meridian;
  }
}

