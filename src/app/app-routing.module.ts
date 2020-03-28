import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component';
import { ManagerComponent } from './manager/manager.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
const routes: Routes = [
{path:'home',component:HomeComponent},
  {path:'shop',component:ShopComponent},
  {path:'manager',component:ManagerComponent},
  {path:'product/edit/:productID',component:ProductEditComponent},
  {path:'product/:productID',component:ProductDetailComponent},
  {path:'news',component:ProductAddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
