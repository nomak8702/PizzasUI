import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

cartItems = [


];

cartTotal =0;
  constructor() { }

  ngOnInit(): void {
  this.cartItems.forEach(item =>{
  this.cartTotal +=(item.qty*item.price)
  })
  }

}
