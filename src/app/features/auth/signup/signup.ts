import {Component, inject} from '@angular/core';
import {Checkbox} from 'primeng/checkbox';
import {InputText} from 'primeng/inputtext';
import {Password} from 'primeng/password';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {Router, RouterLink} from '@angular/router';
import {Divider} from 'primeng/divider';
import { Toast } from 'primeng/toast';
import {MessageService} from 'primeng/api';
import {AuthService} from '../../../core/services/auth-service';
import {RegisterUser} from '../../../core/models/RegisterUser.model';

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
})
export class Signup {
  private readonly authService = inject(AuthService);
  private router = inject(Router);

  private messageService = inject(MessageService);

  signupForm = new FormGroup({
    signupEmail: new FormControl('', {
      validators: [Validators.required, Validators.email],
      nonNullable: true,
    }),
    signupUsername: new FormControl('', {
      validators: [Validators.required, Validators.minLength(8)],
      nonNullable: true,
    }),
    signupPassword: new FormControl('', {
      validators: [Validators.required, Validators.minLength(8), Validators.maxLength(60)],
      nonNullable: true,
    }),
    signupConfirmPassword: new FormControl('', {
      validators: [Validators.required, Validators.minLength(8), Validators.maxLength(60)],
      nonNullable: true,
    }),
  });

  get emailControl() {
    return this.signupForm.controls.signupEmail;
  }
  get usernameControl() {
    return this.signupForm.controls.signupUsername;
  }
  get passwordControl() {
    return this.signupForm.controls.signupPassword;
  }
  get confirmPasswordControl() {
    return this.signupForm.controls.signupConfirmPassword;
  }

  onSubmit() {
    if (this.emailControl.invalid) {
      this.emailControl.markAsTouched();
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

    const request: RegisterUser = {
      Email: this.emailControl.value,
      Username: this.usernameControl.value,
      Password: this.passwordControl.value,
      ConfirmPassword: this.confirmPasswordControl.value
    };

    this.authService.register(request).subscribe({
      next: (res) => {
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: `${res.username} Register successfully`,
          life: 3000,
        });
        this.router.navigate!(['/dashboard/analytics']);
      },
      error: (err) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: err.error?.message || 'Registration failed.',
          life: 3000,
        });
      }
    });
  }
}
