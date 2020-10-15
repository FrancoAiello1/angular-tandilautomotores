import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-automotores-list',
  templateUrl: './automotores-list.component.html',
  styleUrls: ['./automotores-list.component.scss']
})
export class AutomotoresListComponent implements OnInit {

  automotor = {
    modelo: "VW Fox",
    anio: "2005",
    kms: "129.000km",
    consumo: "10.9 l/100km",
    image: "assets/img/fox.jpg"
  }
  constructor() { }

  ngOnInit(): void {
  }

}
