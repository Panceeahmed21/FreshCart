import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/category';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})

export class CategoriesComponent implements OnInit {
  allCategories:Category[]=[]
  constructor(private _productService:ProductService){
  
  }

  ngOnInit(): void {
    this.getCategories()
  }
  getCategories(){
    this._productService.getCategories().subscribe({
      next:(res)=>{
        this.allCategories=res.data
    console.log(this.allCategories);
    
      }

    })
  }
}