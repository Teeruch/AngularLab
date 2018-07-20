import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './inc/header.component';
import { FooterComponent } from './inc/footer.component';
import { ContentComponent } from './content/content.component';
import { CounterComponent } from './counter/counter.component';
import { ProductService } from './service/product.service';
import { ProductModule } from './products/product.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    CounterComponent,
    
  ],
  imports: [
    BrowserModule,  
    FormsModule,
    ProductModule
  ],
  providers: [],
  bootstrap: [
    HeaderComponent, 
    ContentComponent, 
    FooterComponent
  ]
})
export class AppModule { }