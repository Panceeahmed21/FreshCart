import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { City } from 'country-state-city';
import { CartService } from '../cart/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent   {
  cartID:string=''
  constructor(private _cartService:CartService ,private _activatedRoute:ActivatedRoute){
this._activatedRoute.paramMap.subscribe({
  next:(res:any)=>{
    this.cartID=res.params['cartId'];
    
    
  }

})
  }
  shippingAddress:FormGroup= new FormGroup({
    details:new FormControl(null),
    phone:new FormControl(null),
    city:new FormControl(null),

  })
  handlePay(){
  this._cartService.handlePayment(this.shippingAddress.value,this.cartID).subscribe({
    next:(res)=>{
      window.location.href=res.session.url;
      
    }
  })
  }


}
