import { Component, OnInit } from '@angular/core';
import { Repuesto } from './repuesto';

@Component({
  selector: 'app-repuestos-list',
  templateUrl: './repuestos-list.component.html',
  styleUrls: ['./repuestos-list.component.scss']
})
export class RepuestosListComponent implements OnInit {


  repuestos: Repuesto[] = [
    {
      nombre: "Bobina de encendido",
      condicion: "Nuevo",
      disp: true,
      cantidad: 0,
      stock: 4,
      image: "assets/img/bobinaEncendido.jpg"
    },
    {
      nombre: "Cables de bujias",
      condicion: "Nuevo",
      disp: false,
      cantidad: 0,
      stock: 0,
      image: "assets/img/bobinaEncendido.jpg"
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }
}
