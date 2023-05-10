import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';
import { Product } from '../product';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CartService } from '../cart/cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  productDetails:Product={} as Product
  productID:string=''
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }

constructor( private _activatedRoute:ActivatedRoute,
  private _productService:ProductService,
  private _cartService:CartService
  ){
  this._activatedRoute.paramMap.subscribe({
    next:(param:any)=>{
      this.productID=param.params.id
    }
  })
}
ngOnInit(): void {
  this.getProductById()
}
getProductById(){
  this._productService.getProductById(this.productID).subscribe({
    next:(res)=>{
    
      this.productDetails=res.data
      
    }
  })
}



  addProduct(id:string){
    this._cartService.addToCart(id).subscribe({
      next:(res:any)=>{
        console.log(res)
      },
      error:(err:any)=>console.log(err)
      
      
    })
    }
}
