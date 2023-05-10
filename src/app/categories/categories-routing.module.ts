import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import { SubcategoriesComponent } from './subcategories/subcategories.component';

const routes: Routes = [
  {path:"",component:CategoriesComponent,title:"Categories"},
  {path:"subcategories/:subCatID",component:SubcategoriesComponent,title:" SubCategories"},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriesRoutingModule { }
