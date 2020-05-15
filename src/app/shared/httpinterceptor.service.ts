import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (localStorage.getItem('token')) {
      req = req.clone({
        setHeaders: {
          Authorization: localStorage.getItem('token')
        }
      });
    }

    return next.handle(req);
  }
}
