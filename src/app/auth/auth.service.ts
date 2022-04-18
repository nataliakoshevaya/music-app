import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserCredentialType } from './types/auth.type';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {}

  login<T>(url: string, loginData: UserCredentialType): Observable<T> {
    return this.http.post<T>(url, loginData);
  }
}
