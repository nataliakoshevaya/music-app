import { createAction, props } from '@ngrx/store';
import {
  RegistrationUsersDataType,
  UserCredentialType,
} from 'src/app/auth/types/auth.type';

export enum EAuthActions {
  auth = '[Auth] Get auth',
  authSuccess = '[Auth] Get auth success',
  authFailure = '[Auth] Get auth failure',
}

export const auth = createAction(
  EAuthActions.auth,
  props<{
    url: string;
    credentials: UserCredentialType | RegistrationUsersDataType;
  }>()
);

export const authSuccess = createAction(EAuthActions.authSuccess);

export const authFailure = createAction(
  EAuthActions.authFailure,
  props<{ error: string }>()
);
