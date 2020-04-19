import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component';
import { ManagerComponent } from './manager/manager.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
 {path:'home',component:HomeComponent},
  {path:'shop',component:ShopComponent},
 {path:'about',component:AboutComponent},
  {path:'login',component:LoginComponent},
  {path:'cart',component:CartComponent},
   {path:'checkout',component:CheckoutComponent},
  {path:'admin',component:AdminComponent,
  children:[
  { path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path:'dashboard',component:DashboardComponent},
  {path:'manager',component:ManagerComponent},
  {path:'product/edit/:productID',component:ProductEditComponent},
  {path:'product/:productID',component:ProductDetailComponent},
  {path:'news',component:ProductAddComponent},
  {path:'loginad',component:LoginAdminComponent}
]
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
