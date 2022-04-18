import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class PlayerService {
  constructor(private http: HttpClient) {}

  getTracks<T>(url: string): Observable<T> {
    return this.http.get<T>(url);
  }
}
