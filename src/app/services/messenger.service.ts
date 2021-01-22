import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';
import {Product} from 'src/app/models/product';

@Injectable({
  providedIn: 'root'
})
export class MessengerService {

subject = new Subject()

  constructor() {  }

    sendMsg(pizza){
    console.log(pizza)
     this.subject.next(pizza)

    }

    getMsg(){
return this.subject.asObservable()

    }

}
