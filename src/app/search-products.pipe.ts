
import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './product';


@Pipe({
  name: 'searchProducts'
})
export class SearchProductsPipe implements PipeTransform {

  transform(value: Product[],term:string):Product[] {
return value.filter((product)=>product.title.toLowerCase().includes(term.toLowerCase()))
  }

}
