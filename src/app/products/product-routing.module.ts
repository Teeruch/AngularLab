import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list.component';
import { NewProductComponent } from './new-product.component';

const routes: Routes = [
  { path : 'products'     , component : ProductListComponent },
  { path : 'products/new' , component : NewProductComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
