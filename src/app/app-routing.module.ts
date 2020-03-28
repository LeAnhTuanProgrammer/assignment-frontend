import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component';
import { ManagerComponent } from './manager/manager.component';
import { ProductAddComponent } from './product-add/product-add.component';
const routes: Routes = [
{path:'home',component:HomeComponent},
  {path:'shop',component:ShopComponent},
  {path:'manager',component:ManagerComponent},
  {path:'news',component:ProductAddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
