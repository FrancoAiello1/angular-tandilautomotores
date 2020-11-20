import { Component, OnInit, ɵinitServicesIfNeeded } from '@angular/core';
import { RepuestosCartService } from '../repuestos-cart.service';
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
      image: "assets/img/cableBujia.jpg"
    },
  ]
  

  constructor(private cart: RepuestosCartService) {
   }

  ngOnInit(): void {
  }

  addToCart(Repuesto): void{
    this.cart.addToCart(Repuesto);
    Repuesto.stock -= Repuesto.cantidad;
    Repuesto.cantidad=0;
  }

}
