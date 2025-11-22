import {Component, inject} from '@angular/core';
import {Checkbox} from 'primeng/checkbox';
import {InputText} from 'primeng/inputtext';
import {Password} from 'primeng/password';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {RouterLink} from '@angular/router';
import {Divider} from 'primeng/divider';
import { Toast } from 'primeng/toast';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-signup',
  imports: [
    Checkbox,
    InputText,
    Password,
    ReactiveFormsModule,
    RouterLink,
    Divider,
    Toast
  ],
  providers: [MessageService],
  templateUrl: './signup.html',
  styles: ``,
})
export class Signup {
  private messageService = inject(MessageService);

  signupForm = new FormGroup({
    signupEmail: new FormControl('', {
      validators: [Validators.required, Validators.email],
      nonNullable: true,
    }),
    signupPassword: new FormControl('', {
      validators: [Validators.required, Validators.minLength(8), Validators.maxLength(60)],
      nonNullable: true,
    }),
  });

  get emailControl() {
    return this.signupForm.controls.signupEmail;
  }

  get passwordControl() {
    return this.signupForm.controls.signupPassword;
  }

  onSubmit() {
    // check email
    if (this.emailControl.invalid) {
      this.emailControl.markAsTouched();

      // add a toast for email detail error
      this.messageService.add({
        severity: 'warn',
        summary: 'Invalid Email',
        detail: this.emailControl.hasError('required')
          ? 'Email is required.'
          : 'Please enter a valid email address.',
        life: 3000,
      });
      return;
    }

    // check password
    if (this.passwordControl.invalid) {
      this.passwordControl.markAsTouched();
      let detail = 'Password is invalid.';

      if (this.passwordControl.hasError('required')) {
        detail = 'Password is required.';
      } else if (this.passwordControl.hasError('minLength')) {
        detail = 'Password must be at least 8 characters.';
      } else if (this.passwordControl.hasError('maxlength')) {
        detail = 'Password must not exceed 60 characters.';
      }

      // add a toast for password detail error
      this.messageService.add({
        severity: 'warn',
        summary: 'Invalid Password',
        detail,
        life: 3000,
      });
      return;
    }

    this.messageService.add({
      severity: 'success',
      summary: 'Welcome',
      detail: 'Login successful!',
      life: 3000,
    });
  }
}
