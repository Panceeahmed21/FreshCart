import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/core/services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  isNotValidForm:boolean=false
  ApiError:string=''
  isLoading:boolean=false
constructor( private _authService:AuthService,private _router:Router){

}
registerForm:FormGroup=new FormGroup(

  {
 
    password:new FormControl("",[Validators.required,Validators.pattern(/^[A-Za-z0-9]{3,8}$/)]),
    rePassword:new FormControl("",[Validators.required,Validators.pattern(/^[A-Za-z0-9]{3,8}$/)]),
    phone:new FormControl("",[Validators.required,Validators.minLength(10),Validators.maxLength(13)])
  }
)
register(form:FormGroup){

  
  if(form.valid){

    this._authService.register(form.value).subscribe({
next:()=>{
  this.isLoading=false
  this._router.navigate(["/login"])
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
