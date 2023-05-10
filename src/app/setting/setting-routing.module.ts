import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangePasswordComponent } from './change-password/change-password.component';

const routes: Routes = [
  {path:"",redirectTo:"change",pathMatch:"full"},
  {path:"change",component:ChangePasswordComponent,title:"Change Password"},
  {path:"reset",component:ResetPasswordComponent,title:"Reset Password"}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingRoutingModule { }
