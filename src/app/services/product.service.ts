import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {NgForm} from '@angular/forms';
import {FormGroup} from '@angular/forms';
import {FormBuilder} from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {Product} from 'src/app/models/product';



@Injectable({
  providedIn: 'root'
})
export class ProductService {

 products: Product[];

  constructor(
  private httpClient: HttpClient

  ) { }

   ngOnInit() {
    this.getProducts();

    }

      getProducts(){
        this.httpClient.get<any>('http://localhost:9001/pizzas').subscribe(
          response => {
            console.log(response);
            this.products = response;
          }
        );
      }
}
