import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { AllProductsComponent } from './all-products/all-products.component';
import { CartComponent } from './cart/cart.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CategoryPipe } from './category.pipe';
import { FilterPipe } from './filter.pipe';


@NgModule({
  declarations: [
    ProductsComponent,
    AllProductsComponent,
    CartComponent,
    NavbarComponent,
    CategoryPipe,
    FilterPipe
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
