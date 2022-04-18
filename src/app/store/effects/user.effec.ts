import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ToastrService } from 'ngx-toastr';
import { catchError, map, of, switchMap, tap } from 'rxjs';
import { UserService } from 'src/app/shared/services/user.service';
import * as UserActions from '../actions/user.action';

@Injectable()
export class UserEffect {
  getUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.getUser.type),
      switchMap(({ sub }) =>
        this.userService.getProfile(sub).pipe(
          map((user) => UserActions.getUserSuccess({ user })),
          catchError((error: HttpErrorResponse) =>
            of(UserActions.getUserFailure({ error: error.message }))
          )
        )
      )
    )
  );

  getUserError$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(UserActions.getUserFailure.type),
        tap(({ error }) => this.toastr.error(error))
      ),
    { dispatch: false }
  );

  logOut$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(UserActions.logOut.type),
        tap(() => {
          localStorage.removeItem('userAccessToken');
          this.router.navigate(['/']);
          return UserActions.logOut();
        })
      ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private userService: UserService,
    private router: Router,
    private toastr: ToastrService
  ) {}
}
