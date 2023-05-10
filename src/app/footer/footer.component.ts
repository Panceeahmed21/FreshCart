import { Component } from '@angular/core';
import { AuthService } from 'src/core/services/auth.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
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
}
