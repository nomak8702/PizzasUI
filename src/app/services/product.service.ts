import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import {Product} from 'src/app/models/product';



@Injectable({
  providedIn: 'root'
})
export class ProductService {

 products: Product[]=[
 new Product(1,'Pizza Pollo','Sos pizza, mozzarella, piept pui, ciuperci,porumb, măsline.','590 g.',25 ),
  new Product(2,'Pizza Casei','Sos pizza, mozzarella, șuncă, salam, ciuperci, măsline, ardei copt, cremă de brânză. ','620 g.',30 ),
   new Product(3,'Pizza Mexicana','Sos pizza, mozzarella, salam, cârnat picant, porumb, ardei iute, cartofi prăjiți, sos aioli. ',28 ),
    new Product(4,'Pizza Hawai','Sos pizza, mozzarella, sunca, ananas.','550 g.',22 ),
     new Product(5,'Pizza Carbonara','Sos pizza, mozzarella, speck, ou, parmezan. ','650 g.',25 ),
      new Product(6,'Pizza Carnivora','Sos de Pizza, 100% Mozzarella, Cârnați, Șuncă, Vită, Pepperoni.','700 g.',35 ),
       new Product(7,'Pizza Margherita','Sos de Pizza, 100% Mozzarella. ','550 g.',20 ),
 ];

  constructor() { }

}
