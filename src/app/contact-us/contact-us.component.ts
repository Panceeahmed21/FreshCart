import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { window } from 'rxjs';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {
messageSent:boolean=false
  isNotValid: boolean = false

  sendMail() {
    this.clearForm()
  }

  contactForm: FormGroup = new FormGroup({
    name: new FormControl("", [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
    email: new FormControl("", [Validators.required, Validators.email]),
    message: new FormControl("", [Validators.required, Validators.minLength(3), Validators.maxLength(500)])
  })
  contact() {
    if (this.contactForm.status == "INVALID") {
      this.isNotValid = true
    }
    else {
      this.isNotValid = false

    }

    this.sendMail()
  }

  clearForm(){
    var nameInput = (<HTMLInputElement>document.getElementById('nameID'))
    nameInput.value=""
    
 
    var emailInput = (<HTMLInputElement>document.getElementById('emailID'))
    emailInput.value=""
    
    var messageArea = (<HTMLInputElement>document.getElementById('message'))
    messageArea.value=""

    this.messageSent=true


  }
}
