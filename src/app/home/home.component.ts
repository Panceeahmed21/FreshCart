import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Category } from '../category';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  allCategories:Category[]=[]
  constructor(private _productService:ProductService){
  
  }
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 8
      }

    },
    nav: true
  }
ngOnInit(): void {
this.getCategories()
}
getCategories(){
  this._productService.getCategories().subscribe({
    next:(res)=>{
      this.allCategories=res.data
  
    }

  })
}
}
