import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { User } from '../_models';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;

    constructor(private http: HttpClient) {
       
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse((localStorage.getItem('currentUser'))));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }

    base='http://localhost:5000/api/utilizador/login';

       login(email: string, password: string) {
        this.logout();
        this.currentUserSubject.next(null);
      return this.http.post<any>(this.base, { email,  password })
             .pipe(map(user => {
              if (user && user.result) {
                  // store user details in local storage to keep user logged in
                  localStorage.setItem('currentUser',JSON.stringify(user.result));
                  this.currentUserSubject.next(user);

                  console.log(user.result);
                  alert(user.message);
              }
              return user;
          }));

  }


    logout() {
        // remove user data from local storage for log out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }
}
