import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MessengerService} from 'src/app/services/messenger.service';
import {Product} from 'src/app/models/product';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';


export class Pizza {
  constructor(
    public id: number,
    public name: string,
    public description: string,
    public weight: string,
    public price: number,

  ) {
  }
}

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.css']
})
export class PizzaComponent implements OnInit {

 pizzas: Pizza[];
 pizzaItem: Product;



  constructor(
  private httpClient: HttpClient, private msg: MessengerService) { }

  ngOnInit(): void {
  this.getPizzas();


  }

  handleAddToCart(){
  this.msg.sendMsg(this.pizzas)
  }

  getPizza(){
   this.httpClient.get<any>('http://localhost:9001/pizzas').subscribe(
        response => {
          console.log(response);
          this.pizzas = response;
        }
      );

  }

  getPizzas(){
    this.httpClient.get<any>('http://localhost:9001/pizzas').subscribe(
      response => {
        console.log(response);
        this.pizzas = response;
      }
    );
  }

}
