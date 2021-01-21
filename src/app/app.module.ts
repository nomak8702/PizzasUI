import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HomeComponent} from './home/home.component';
import {PizzaComponent} from './pizza/pizza.component';
import {HttpClientModule} from '@angular/common/http';
import { CartComponent } from './cart/cart.component';
import { CartItemComponent } from './cart/cart-item/cart-item.component';
import { AdminComponent } from './admin/admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactComponent } from './contact/contact.component';
import { CosComponent } from './cos/cos.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PizzaComponent,
    CartComponent,
    CartItemComponent,
    AdminComponent,
    ContactComponent,
    CosComponent



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
