import { Component } from '@angular/core';
import {InputText} from 'primeng/inputtext';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-verification-code',
  imports: [
    InputText,
    ReactiveFormsModule
  ],
  templateUrl: './verification-code.html',
  styles: ``,
})
export class VerificationCode {
  verifyCodeForm = new FormGroup({
    verificationCode: new FormControl(),
  });

  onSubmit() {
    const verificationCode: string = this.verifyCodeForm.controls.verificationCode.value;

    console.log("Verification Code: ", verificationCode);
  }
}
