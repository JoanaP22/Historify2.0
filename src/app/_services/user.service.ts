import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../_models/user';

@Injectable({ providedIn: 'root' })
export class UserService {
  constructor(private http: HttpClient) { }
  base='http://localhost:5000/api/utilizador/register';
  //`auth/register`
  register(user: User) {
      return this.http.post(this.base, user);
  }

}
