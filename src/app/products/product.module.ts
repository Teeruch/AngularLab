import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductListComponent } from './product-list.component';
import { ProductCodePipe } from './product-code.pipe';

@NgModule({
  imports: [
    CommonModule,
    ProductRoutingModule
  ],
  declarations: [
    ProductListComponent,
    ProductCodePipe
  ],
  exports: [
    ProductListComponent,
    ProductCodePipe
  ]
})
export class ProductModule { }
