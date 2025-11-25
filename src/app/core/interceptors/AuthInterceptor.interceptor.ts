import { HttpRequest, HttpHandlerFn, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { inject } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, switchMap, tap } from 'rxjs/operators';
import {AuthService} from '../services/auth-service';

export const AuthInterceptor = (req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> => {
  const authService = inject(AuthService);

  const token = localStorage.getItem('token');

  let cloned = req;
  if (token) {
    cloned = req.clone({
      setHeaders: { Authorization: `Bearer ${token}` }
    });
  }

  return next(cloned).pipe(
    catchError((err: HttpErrorResponse) => {
      if (err.status === 401) {
        return authService.refreshAccessToken().pipe(
          switchMap(() => {
            const newToken = localStorage.getItem('token');
            const newReq = req.clone({
              setHeaders: { Authorization: `Bearer ${newToken}` }
            });
            return next(newReq);
          }),
          catchError(() => {
            localStorage.clear();
            window.location.href = '/auth/login';
            return throwError(() => err);
          })
        );
      }

      return throwError(() => err);
    })
  );
};
