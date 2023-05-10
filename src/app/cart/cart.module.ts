import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { FilterCartPipe } from './filter-cart.pipe';
import { CartComponent } from './cart.component';


@NgModule({
  declarations: [
    CartComponent,
    FilterCartPipe
  ],
  imports: [
    CommonModule,
    CartRoutingModule
  ]
})
export class CartModule { }
