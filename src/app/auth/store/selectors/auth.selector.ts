import { createSelector } from '@ngrx/store';
import { IAppState, IAuthState } from '../state/auth.state';

const selectAuthState = (state: IAppState) => state.auth;

export const selectAuthError = createSelector(
  selectAuthState,
  (state: IAuthState) => state.errorMessage
);
