import { CartService } from './../cart/cart.service';
import { Component, Input } from '@angular/core';
import { Product } from '../product';


@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
constructor(private _cartService:CartService){

}
@Input() product:Product={} as Product

addProduct(id:string){
this._cartService.addToCart(id).subscribe({
  next:(res:any)=>{
    console.log(res)
  },
  error:(err:any)=>console.log(err)
  
  
})
}


}
