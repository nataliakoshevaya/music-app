import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ProfileType } from 'src/app/profile/profile.type';
import { DEFAULT_USER_PROFILE } from 'src/app/shared/constants/default-user-constant';
import { UserApi } from 'src/app/shared/url';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  userProfile$: BehaviorSubject<ProfileType> = new BehaviorSubject<ProfileType>(
    DEFAULT_USER_PROFILE
  );

  constructor(private http: HttpClient) {}

  setUser(user: ProfileType): void {
    this.userProfile$.next(user);
  }

  getUser(): Observable<ProfileType> {
    return this.userProfile$.asObservable();
  }

  getProfile(id: string): Observable<ProfileType> {
    const userToken = localStorage.getItem('userAccessToken');
    const headers = {
      Authorization: `Bearer ${userToken}`,
    };

    return this.http.get<ProfileType>(`/users/${UserApi.USER_PROFILE}/${id}`, {
      headers,
    });
  }
}
