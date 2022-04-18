/* eslint-disable prettier/prettier */
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpHeaders,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, Observable, switchMap, throwError } from 'rxjs';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';

@Injectable()
export class AuthenticationInterceptorService implements HttpInterceptor {
  spotify_token = '';

  constructor(
    public authenticationService: AuthenticationService,
    private localStorageService: LocalStorageService,
    private router: Router
  ) {}

  setHeaders(token: string): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    });
  }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (req.url.includes('/spotify')) {
      this.spotify_token = localStorage.getItem('spotifyToken') || '';

      let modifiedReq = req.clone({
        headers: req.headers.set( 'Authorization', `Bearer ${this.spotify_token}`)
      }) 

      return next.handle(modifiedReq).pipe(
        catchError((error: HttpErrorResponse) => {
          if (req.url.includes('/spotify') && error.status === 401) {
            return this.authenticationService.getToken().pipe(
              switchMap(token => {
                this.localStorageService.setTokenInLocalStorage(
                  'spotifyToken',
                  token.access_token
                ); 

                modifiedReq = req.clone({
                  headers: req.headers.set( 'Authorization', `Bearer ${token.access_token}`)
                }) 
                
                return next.handle(modifiedReq)
              })
            )
          }

          return throwError(error);
        })
      );
    }

    if('/users') {
      return next.handle(req).pipe(
        catchError((error: HttpErrorResponse) => {
          if (error.status === 401) {
            localStorage.removeItem('userAccessToken');
            this.router.navigate(['/']);
            this.authenticationService.setAuthUser(false);
          }
        
          return throwError(error);
        })
      )
    }

    return next.handle(req);
  }
}
