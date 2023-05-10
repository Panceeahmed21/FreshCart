import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/core/services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  isNotValidForm:boolean=false
  ApiError:string=''
  isLoading:boolean=false
constructor( private _authService:AuthService,private _router:Router){

}
loginForm:FormGroup=new FormGroup(

  {

    email: new FormControl("",[Validators.required,Validators.email]),
    password:new FormControl("",[Validators.required,Validators.pattern(/^[A-Za-z0-9]{3,8}$/)])

  }
)
login(form:FormGroup){

  
  if(form.valid){

    this._authService.login(form.value).subscribe({
next:(data)=>{
  this.isLoading=false
  this._router.navigate(["/home"])

  localStorage.setItem("userToken",data.token)
  this._authService.getUserData()
},
error:(err)=>{
 this.ApiError=err.error.message
 this.isLoading=false
}
    })
    this.isLoading=true;
      
  }
else{
  this.isNotValidForm=true
}
}
}
