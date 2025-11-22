import { Component } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {Divider} from 'primeng/divider';
import {Password} from 'primeng/password';

@Component({
  selector: 'app-create-new-password',
  imports: [
    ReactiveFormsModule,
    Divider,
    Password,
  ],
  templateUrl: './create-new-password.html',
  styles: ``,
})
export class CreateNewPassword {
  newPasswordForm = new FormGroup({
    newPassword: new FormControl(),
    confirmNewPassword: new FormControl(),
  });

  onSubmit() {
    const newPassword: string = this.newPasswordForm.controls.newPassword.value;
    const confirmNewPassword: string = this.newPasswordForm.controls.confirmNewPassword.value;

    console.log("Email: ", newPassword);
    console.log("Password: ", confirmNewPassword);
  }
}
