import { Component, OnInit } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { RepuestosCartService } from '../repuestos-cart.service';
import { Repuesto } from '../repuestos-list/repuesto';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements OnInit {

  cartList$: Observable<Repuesto[]>;
  constructor(public cart: RepuestosCartService) { 
    this.cartList$ = cart.cartList.asObservable();

  
  }

  ngOnInit(): void {
  }

}
