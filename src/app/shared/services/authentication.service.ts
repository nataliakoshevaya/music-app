import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { TokenSubType } from 'src/app/shared/types/player.type';
import { environment } from 'src/environments/environment.dev';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  isAuthenticated$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );

  CLIENT_ID = environment.CLIENT_ID;

  CLIENT_SECRET = environment.CLIENT_SECRET;

  constructor(private http: HttpClient) {}

  setAuthUser(isAuth: boolean): void {
    this.isAuthenticated$.next(isAuth);
  }

  getAuthUser(): Observable<boolean> {
    return this.isAuthenticated$.asObservable();
  }

  getToken(): Observable<TokenSubType> {
    const headers = {
      'Content-Type': 'application/x-www-form-urlencoded',
      // eslint-disable-next-line prettier/prettier
      'Authorization': 'Basic ' + btoa(this.CLIENT_ID + ':' + this.CLIENT_SECRET),
    };
    const body = 'grant_type=client_credentials';
    return this.http.post<TokenSubType>(
      'https://accounts.spotify.com/api/token',
      body,
      {
        headers,
      }
    );
  }
}
