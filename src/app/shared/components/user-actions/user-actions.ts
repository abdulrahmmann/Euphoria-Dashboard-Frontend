import {Component, inject} from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import {AuthService} from '../../../core/services/auth-service';

@Component({
  selector: 'app-user-actions',
  imports: [
    RouterLink
  ],
  templateUrl: './user-actions.html',
})
export class UserActions {
  private authService = inject(AuthService);

  logout() {
    this.authService.logout();
  }
}
