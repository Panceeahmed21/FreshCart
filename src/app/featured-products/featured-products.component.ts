import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product';

@Component({
  selector: 'app-featured-products',
  templateUrl: './featured-products.component.html',
  styleUrls: ['./featured-products.component.css']
})
export class FeaturedProductsComponent implements OnInit {
  searchProduct:string=''
  allProducts:Product[]=[]

constructor(private _productService:ProductService){

}
getAllProducts(){
this._productService.getProducts().subscribe({
  next:(res:any)=>{
this.allProducts=res.data
console.log(this.allProducts);

  }
  
})
    }
  


ngOnInit(): void {
  this.getAllProducts();
}
}
