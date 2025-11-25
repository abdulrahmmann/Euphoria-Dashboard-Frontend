import {inject, Injectable, signal} from '@angular/core';
import {AuthenticationResponse} from '../models/AuthenticationResponse.model';
import {RegisterUser} from '../models/RegisterUser.model';
import {catchError, Observable, tap, throwError} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {LoginUser} from '../models/LoginUser.model';
import {environment} from '../environments/environment.env';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly httpClient = inject(HttpClient);
  private router = inject(Router);
  private apiUrl = environment.apiUrl;

  currentUser = signal<AuthenticationResponse | undefined>(undefined);

  register(user: RegisterUser): Observable<AuthenticationResponse> {
    return this.httpClient.post<AuthenticationResponse>(`${this.apiUrl}/Account/register`, user).pipe(
      tap((response) => {
        this.storeTokens(response);
        this.currentUser.set(response);
        }
      )
    )
  }

  login(user: LoginUser): Observable<AuthenticationResponse> {
    return this.httpClient.post<AuthenticationResponse>(`${this.apiUrl}/Account/login`, user).pipe(
      tap((response) => {
          this.storeTokens(response);
          this.currentUser.set(response);
        }
      )
    )
  }

  refreshAccessToken() {
    const token = localStorage.getItem('token');
    const refreshToken = localStorage.getItem('refreshToken');

    if (!token || !refreshToken) {
      return throwError(() => new Error("No refresh token"));
    }

    return this.httpClient.post<any>(`${this.apiUrl}/Account/generate-new-access-token`, {
      token, refreshToken
    }).pipe(
      tap((response) => {
        // store new token
        localStorage.setItem('token', response.token);
        localStorage.setItem('tokenExpiration', response.tokenExpiration);
      })
    );
  }

  private storeTokens(data:AuthenticationResponse) {
    localStorage.setItem('token', data.token);
    localStorage.setItem('refreshToken', data.refreshToken!);
    localStorage.setItem('tokenExpiration', data.expiration);
    localStorage.setItem('RefreshTokenExpiration', data.refreshTokenExpiration);
    localStorage.setItem('userId', data.userId);
    localStorage.setItem('username', data.username!);
  }

  logout() {
    localStorage.clear();
    this.currentUser.set(undefined);
    this.router.navigate(['/auth/login']);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }
}
