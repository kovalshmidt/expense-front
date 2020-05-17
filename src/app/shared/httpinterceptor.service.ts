import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {AuthenticationService, TOKEN_NAME} from './authentication.service';

const AUTH_PREFIX = 'Bearer';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor(private auth: AuthenticationService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem(TOKEN_NAME);
    if (this.auth.isUserLoggedIn()) {
      req = req.clone({
        setHeaders: {
          Authorization: `${AUTH_PREFIX} ${token}`
        }
      });
    }

    return next.handle(req);
  }
}
