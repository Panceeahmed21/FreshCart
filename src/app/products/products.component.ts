import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { Cart } from '../cart/cart';
import { CartService } from '../cart/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {


constructor(private _cartService: CartService){

}
}