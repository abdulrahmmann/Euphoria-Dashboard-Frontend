import {Component, signal} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    FormsModule,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Euphoria');
  // private router = inject(Router);
  // private authService = inject(AuthService);
  //
  // ngOnInit(): void {
  //   if (!this.authService.isAuthenticated()) {
  //     this.router.navigate(['/auth/login']);
  //   } else {
  //     this.router.navigate(['/dashboard/analytics']);
  //   }
  // }
}
