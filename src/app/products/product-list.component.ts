import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';
import { Products } from './products';

@Component({
  selector      : 'app-product-list',
  templateUrl   : './product-list.component.html',
  providers     : [ProductService],
  styleUrls     : ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products : Products[]

  constructor(private productService : ProductService) { }

  ngOnInit() {
      this.productService.getAll().subscribe((products) => {
        console.log(products)

        this.products = products
      })
  }

  formatPrice(price) {
    return {
      'low-price' : price < 300 , 
      'high-price': price >= 300
      }
  }

  testService() {
    this.productService.hello();
  }

}
