import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Repuesto } from '../repuestos-list/repuesto';

@Component({
  selector: 'app-input-stock',
  templateUrl: './input-stock.component.html',
  styleUrls: ['./input-stock.component.scss']
})
export class InputStockComponent implements OnInit {

  constructor() { }

  @Input() 
  quantity: number;

  @Input()
  maxCant: number;

  @Output()
  quantityChange: EventEmitter<number> = new EventEmitter<number>();


  ngOnInit(): void {
  }
  downCant(): void {
    if (this.quantity > 0){
      this.quantity--;
      this.quantityChange.emit(this.quantity);
    }
  }

  upCant(): void {
    if (this.quantity < this.maxCant){
      this.quantity++;
      this.quantityChange.emit(this.quantity);
    }
  }

  changeCant(event): void{
    if (event.code > this.maxCant)
      event.preventDefault();
      this.quantityChange.emit(this.quantity);
  }
}
