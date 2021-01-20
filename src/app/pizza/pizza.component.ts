import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";



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
 private httpClient:HttpClient;

  constructor(
  httpClient: HttpClient
  ) { }

  ngOnInit(): void {
  this.getPizzas();

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
