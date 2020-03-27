import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';
import { Product } from '../Product';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private productService: ProductService
  ) { 
    console.log('constructor')
  }
   selected: Product;
  products: Product[];
  ngOnInit(): void {
    this.getProducts();
  }
 
  getProducts(){
   this.productService.getProducts().subscribe(data => {
     console.log(data);
     this.products = data;
    });
  }
}