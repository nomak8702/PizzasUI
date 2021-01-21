import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {PizzaComponent} from './pizza/pizza.component';
import {AdminComponent} from './admin/admin.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'pizzas', component: PizzaComponent},
  {path: 'admin', component: AdminComponent},
  {path: '', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
