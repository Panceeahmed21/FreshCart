import { Component } from '@angular/core';
import { AuthService } from 'src/core/services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  isLoggedIn:boolean=false
constructor(private _authService:AuthService){
  this._authService.userData.subscribe(()=>{
    if( this._authService.userData.getValue()){
this.isLoggedIn=true
    }
    else{
      this.isLoggedIn=false
    }
  })
}
logOut(){
  this._authService.logOut()
}
}
