import {HttpStatusCode} from '@angular/common/http';

export interface AuthenticationResponse {
  httpStatusCode: HttpStatusCode;
  timestamp: string;
  message: string | null;
  errors: string[] | null;
  userId: string;
  username: string | null;
  email: string | null;
  token: string;
  refreshToken: string | null;
  refreshTokenExpiration: string;
  expiration: string;
}
