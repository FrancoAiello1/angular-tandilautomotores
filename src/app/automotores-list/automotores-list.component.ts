import { Component, OnInit } from '@angular/core';
import { Automotor } from './automotor';

@Component({
  selector: 'app-automotores-list',
  templateUrl: './automotores-list.component.html',
  styleUrls: ['./automotores-list.component.scss']
})
export class AutomotoresListComponent implements OnInit {

  automotores:  Automotor[] = [
    {
    modelo: "VW Fox",
    anio: 2005,
    kms: 129000,
    consumo: 10.9,
    disp: true,
    image: "assets/img/fox.jpg"
  },
  {
    modelo: "VW Gol",
    anio: 2012,
    kms: 87000,
    consumo: 10.9,
    disp: false,
    image: "assets/img/fox.jpg"
  }
]
  constructor() { }

  ngOnInit(): void {
  }

}
