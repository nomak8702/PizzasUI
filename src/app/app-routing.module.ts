import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {PizzaComponent} from './pizza/pizza.component';
import {AdminComponent} from './admin/admin.component';
import {ContactComponent} from './contact/contact.component';
import {CosComponent} from './cos/cos.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'pizzas', component: PizzaComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'cos', component: CosComponent},
  {path: '', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
