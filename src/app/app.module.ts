import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from './product.service';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AppRoutingModule } from './app-routing.module';
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
import { NewsComponent } from './news/news.component';
import { ManagerNewsComponent } from './manager-news/manager-news.component';





@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule, HttpClientModule ],
  declarations: [ AppComponent, HelloComponent, HomeComponent, ShopComponent, ManagerComponent, ProductAddComponent, ProductEditComponent, ProductDetailComponent, AdminComponent, DashboardComponent, AboutComponent, LoginComponent, LoginAdminComponent, CartComponent, CheckoutComponent, NewsComponent, ManagerNewsComponent ],
  bootstrap:    [ AppComponent ],
   providers: [ProductService]
})
export class AppModule { }
