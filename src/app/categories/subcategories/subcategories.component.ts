import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/product.service';
import { Category } from 'src/app/category';

@Component({
  selector: 'app-subcategories',
  templateUrl: './subcategories.component.html',
  styleUrls: ['./subcategories.component.css']
})
export class SubcategoriesComponent implements OnInit {

  categID:string=''

  subCategList:Category[]=[]
  
constructor(private _productService:ProductService,private _activatedRoute:ActivatedRoute){
  this._activatedRoute.paramMap.subscribe({

    next:(res:any)=>{
      this.categID=res.params['subCatID'];
    }
  })
}
ngOnInit(): void {
  this.getSubCateg()
}
getSubCateg(){
  this._productService.getSubCategories(this.categID).subscribe({
    next:(res)=>{
     this.subCategList=res.data
     console.log(this.subCategList);
     
      
    }
  })
}
}

