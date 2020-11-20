import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Repuesto } from './repuestos-list/repuesto';



@Injectable({
  providedIn: 'root'
})
export class RepuestosCartService {

  private _cartList: Repuesto[] = [];
  cartList: BehaviorSubject <Repuesto []> = new BehaviorSubject([]);

  constructor() { }

  addToCart(Repuesto: Repuesto) {
    let item : Repuesto = this._cartList.find(v1 => v1.nombre == Repuesto.nombre)
    if (!item){
      this._cartList.push({ ... Repuesto});
    }else{
      item.cantidad += Repuesto.cantidad;
    }
    console.log(this._cartList);
    this.cartList.next(this._cartList);
  }

}
