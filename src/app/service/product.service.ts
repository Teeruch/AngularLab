import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Products } from '../products/products';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private SERVICE_URL = "http://localhost:3000/products"

  constructor(private http : HttpClient) { }

  hello() {
    console.log('Hello Service')
  }

  getAll() :Observable<Products[]>{
    return this.http.get<Products[]>(this.SERVICE_URL)
  }
}
