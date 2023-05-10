import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { BrandsComponent } from './brands/brands.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { AuthGuard } from './auth.guard';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { OrdersComponent } from './orders/orders.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

const routes: Routes = [
  {path:"", redirectTo:"home",pathMatch:"full"},
{path:"home",component:HomeComponent,title:"Home", canActivate:[AuthGuard]},
{path:"contactUs",component:ContactUsComponent,title:"Contact Us", canActivate:[AuthGuard]},

{path:"products",component:ProductsComponent,title:"Products" , canActivate:[AuthGuard]},
{path:"categories",loadChildren:()=>import('./categories/categories.module').then((m)=>m.CategoriesModule)},
{path:"brands",component:BrandsComponent,title:"Brands" , canActivate:[AuthGuard]},
{path:"checkout/:cartId",component:CheckoutComponent,title:"Checkout" , canActivate:[AuthGuard]},
{path:"allorders",component:OrdersComponent,title:"Orders" , canActivate:[AuthGuard]},
{path:"brands",loadChildren:()=>import('./brands/brands.module').then((m)=>m.BrandsModule)},
{path:"productDetails/:id",component:ProductDetailsComponent,title:"Product Details" , canActivate:[AuthGuard]},
{path:"setting",loadChildren:()=>import ('./setting/setting.module').then((m)=>m.SettingModule)},
{path:"cart",loadChildren:()=>import('./cart/cart.module').then((x)=>x.CartModule)},



{path:"register",component:SignUpComponent,title:"Register"},
{path:"login",component:SignInComponent,title:"Login"},
// {path:"logout",component:LogoutComponent,title:"Brands"},



















{path:"**",component:NotFoundComponent,title:"Not Found"}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
