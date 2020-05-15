import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private BASE_URL = `http://localhost:8080` + `/api`;
  private AUTHENTICATION_URL = `${this.BASE_URL}/authenticate`;

  constructor(private http: HttpClient) { }

  authenticate(username: string, password: string): Observable<any> {
    return this.http.post(this.AUTHENTICATION_URL, {username, password});
  }

  isUserLoggedIn() {
    const jwt = localStorage.getItem('token');
    return !(jwt === null);
  }

  logOut() {
    localStorage.removeItem('token');
  }
}
