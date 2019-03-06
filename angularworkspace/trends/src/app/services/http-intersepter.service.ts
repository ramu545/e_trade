import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpIntersepterService implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let tokenl = localStorage.getItem('jwt-token');
    let tokens = sessionStorage.getItem('jwt-token');
    if(tokenl || tokens){
      if(tokenl && !tokens){
        request = request.clone({ setHeaders: {"jwt-token":tokenl} });
      }else if(!tokenl && tokens){
        request = request.clone({ setHeaders: {"jwt-token":tokens} });
      }
    }
    return next.handle(request);
  }
}

// intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//   const token: string = localStorage.getItem('token');

//   if (token) {
//       request = request.clone({ headers: request.headers.set('Authorization', 'Bearer ' + token) });
//   }

//   if (!request.headers.has('Content-Type')) {
//       request = request.clone({ headers: request.headers.set('Content-Type', 'application/json') });
//   }

//   request = request.clone({ headers: request.headers.set('Accept', 'application/json') });

//   return next.handle(request).pipe(
//       map((event: HttpEvent<any>) => {
//           if (event instanceof HttpResponse) {
//               console.log('event--->>>', event);
//           }
//           return event;
//       }));
// }