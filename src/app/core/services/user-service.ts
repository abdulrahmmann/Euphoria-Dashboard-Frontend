import {inject, Injectable, signal} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment.env';
import {Observable, tap} from 'rxjs';
import {UserResponseModel} from '../models/UserResponse.model';
import {UserModel} from '../models/User.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private readonly httpClient = inject(HttpClient);
  private apiUrl = environment.apiUrl;
  users = signal<UserModel[] | undefined>(undefined);

  getUsers(): Observable<UserResponseModel> {
    return this.httpClient.get<UserResponseModel>(`${this.apiUrl}/Account/Users/user`).pipe(
      tap((response) => {
          this.users.set(response.data);
        }
      )
    );
  }
}
