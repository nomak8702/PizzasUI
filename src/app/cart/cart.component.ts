import { Component, OnInit } from '@angular/core';
import {MessengerService} from 'src/app/services/messenger.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

cartItems = [
{id:1,qty:4,price:100},
{id:2,qty:5,price:100},
{id:3,qty:3,price:100},
{id:4,qty:2,price:100}

];

cartTotal =0;
  constructor(private msg: MessengerService) { }

  ngOnInit(): void {



  this.cartItems.forEach(item =>{
  this.cartTotal +=(item.qty*item.price)
  })
  }

}
