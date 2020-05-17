import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import * as jwt_decode from 'jwt-decode';

export const TOKEN_NAME = 'jwt_token';

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
    const jwt = localStorage.getItem(TOKEN_NAME);
    return !(jwt === null) && !this.isTokenExpired(jwt);
  }

  logOut() {
    localStorage.removeItem(TOKEN_NAME);
  }

  getToken(): string {
    return localStorage.getItem(TOKEN_NAME);
  }

  setToken(token: string): void {
    localStorage.setItem(TOKEN_NAME, token);
  }

  getTokenExpirationDate(token: string): Date {
    const decoded = jwt_decode(token);

    if (decoded.exp === undefined) {
      return null;
    }

    const date = new Date(0);
    date.setUTCSeconds(decoded.exp);
    return date;
  }

  isTokenExpired(token?: string): boolean {
    if (!token) { token = this.getToken(); }
    if (!token) { return true; }

    const date = this.getTokenExpirationDate(token);
    if (date === undefined) { return false; }
    return !(date.valueOf() > new Date().valueOf());
  }
}
