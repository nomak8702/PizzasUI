import { Component, OnInit } from '@angular/core';
import {MessengerService} from 'src/app/services/messenger.service';
import {Product} from 'src/app/models/product';
import { CartItemComponent } from 'src/app/cart/cart-item/cart-item.component';
import { Router } from '@angular/router';
import {NgForm} from '@angular/forms';
import {FormGroup} from '@angular/forms';
import {FormBuilder} from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {NgbModal, ModalDismissReasons}  from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

closeResult = '';
btnClick= function () {
        this.router.navigate(['/cos']);
};

cartItems = [

];

cartTotal =0;
  constructor(private msg: MessengerService,
   private modalService: NgbModal
  ) { }

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

open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
