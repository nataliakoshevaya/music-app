import { createAction, props } from '@ngrx/store';
import { ProfileType } from 'src/app/profile/profile.type';

export enum EUserActions {
  getUser = '[User] Get users',
  getUserSuccess = '[User] Get user success',
  getUserFailure = '[User] Get user failure',
  userLogOut = '[User] Logout',
}

export const getUser = createAction(
  EUserActions.getUser,
  props<{ sub: string }>()
);

export const getUserSuccess = createAction(
  EUserActions.getUserSuccess,
  props<{ user: ProfileType }>()
);

export const getUserFailure = createAction(
  EUserActions.getUserFailure,
  props<{ error: string }>()
);

export const logOut = createAction(EUserActions.userLogOut);
