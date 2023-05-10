import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Category } from '../category';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css']
})
export class BrandsComponent implements OnInit{
  allBrands:Category[]=[]

constructor(private _productService:ProductService){

}
ngOnInit(): void {
  this.getBrands()
}
getBrands(){
  this._productService.getbrands().subscribe({
    next:(res)=>{
      this.allBrands=res.data
  console.log(this.allBrands);
  
    }

  })
}
}
