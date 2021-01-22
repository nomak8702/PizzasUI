import { Component, OnInit } from '@angular/core';
import {MessengerService} from 'src/app/services/messenger.service';
import {Product} from 'src/app/models/product';
import { CartItemComponent } from 'src/app/cart/cart-item/cart-item.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

cartItems = [

];

cartTotal =0;
  constructor(private msg: MessengerService) { }

  ngOnInit() {
this.msg.getMsg().subscribe((product: Product) =>{
this.addProductToCart(product)
})
  }

 addProductToCart(product: Product){

let productExist = false

  for(let i  in this.cartItems){
   if(this.cartItems[i].productId === product.id){
   this.cartItems[i].qty++
   productExist=true;
   break;

   }
   }

 if(!productExist){
 this.cartItems.push({
     productId: product.id,
     productName: product.name,
     qty:1,
     price: product.price
   })
 }




 this.cartTotal=0
  this.cartItems.forEach(item =>{
   this.cartTotal +=(item.qty*item.price)

   })


 }

}
