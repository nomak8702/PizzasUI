import { Component, OnInit,Input } from '@angular/core';
import {MessengerService} from 'src/app/services/messenger.service';
import {Product} from 'src/app/models/product';
import { CartItemComponent } from 'src/app/cart/cart-item/cart-item.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cos',
  templateUrl: './cos.component.html',
  styleUrls: ['./cos.component.css']
})
export class CosComponent implements OnInit {

message
receiveMessage($event){
this.message=$event
}

    constructor(private msg: MessengerService) { }

    ngOnInit() {
    }


}
