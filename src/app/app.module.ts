import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './inc/header.component';
import { FooterComponent } from './inc/footer.component';
import { ContentComponent } from './content/content.component';
import { CounterComponent } from './counter/counter.component';
import { ProductModule } from './products/product.module';
import { RouterModule, Routes } from '../../node_modules/@angular/router';
import { NewProductComponent } from './products/new-product.component';

const routes: Routes = [
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  { path: '**', redirectTo: 'products', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    CounterComponent,
    NewProductComponent
  ],
  imports: [
    BrowserModule,  
    FormsModule,
    ProductModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [
    HeaderComponent, 
    ContentComponent, 
    FooterComponent
  ]
})
export class AppModule { }
