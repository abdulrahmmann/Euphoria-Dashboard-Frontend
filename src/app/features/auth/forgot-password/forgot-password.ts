import {Component, inject} from '@angular/core';
import {InputText} from "primeng/inputtext";
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {RouterLink} from '@angular/router';
import {Toast} from 'primeng/toast';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-forgot-password',
  imports: [
    InputText,
    ReactiveFormsModule,
    RouterLink,
    Toast,
  ],
  providers: [MessageService],
  templateUrl: './forgot-password.html',
  styles: ``,
})
export class ForgotPassword {
  private messageService = inject(MessageService);

  resetPasswordForm = new FormGroup({
    resetEmail: new FormControl(),
  });

  get emailControl() {
    return this.resetPasswordForm.controls.resetEmail;
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

    this.messageService.add({
      severity: 'success',
      summary: 'Welcome',
      detail: 'Login successful!',
      life: 3000,
    });
  }
}
