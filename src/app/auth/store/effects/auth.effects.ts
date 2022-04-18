import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap, tap } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import { environment } from 'src/environments/environment.dev';
import {
  RegistrationUsersDataType,
  UserCredentialType,
  UserResponseType,
} from '../../types/auth.type';
import * as UserActions from '../actions/auth.actions';

type AuthActionType = {
  url: string;
  credentials: UserCredentialType | RegistrationUsersDataType;
};

@Injectable()
export class AuthEffect {
  auth$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.auth.type),
      switchMap(({ url, credentials }: AuthActionType) => {
        return this.authService.login<UserResponseType>(url, credentials).pipe(
          map((user) => {
            localStorage.setItem('userAccessToken', user.accessToken);
            return UserActions.authSuccess();
          }),
          catchError((error: HttpErrorResponse) =>
            of(UserActions.authFailure({ error: error.message }))
          )
        );
      })
    )
  );

  authSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(UserActions.authSuccess.type),
        tap(() => {
          this.createSpotifyAuthUrl();
          location.href = this.spotifyAuthUrl;
        })
      ),
    { dispatch: false }
  );

  createSpotifyAuthUrl(): string {
    const clientId = environment.CLIENT_ID;
    const redirectUri = 'http://localhost:4200/home';
    const scope = ['user-read-private', 'user-read-email'];
    const scopeStr = scope.join('%20');
    return (this.spotifyAuthUrl = `https://accounts.spotify.com/authorize?response_type=token&client_id=${clientId}&scope=${scopeStr}&redirect_uri=${redirectUri}`);
  }

  spotifyAuthUrl = '';

  constructor(private actions$: Actions, private authService: AuthService) {}
}
