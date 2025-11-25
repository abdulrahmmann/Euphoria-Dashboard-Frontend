import {HttpStatusCode} from '@angular/common/http';
import {UserModel} from './User.model';

export interface UserResponseModel {
  totalCount: number;
  httpStatusCode: HttpStatusCode;
  email: string | null;
  message: string | null;
  timestamp: string;
  data: UserModel[];
}
