import { createSelector } from '@ngrx/store';
import { IAppState } from '../state/app.state';
import { IUserState } from '../state/user.state';

const selectUserState = (state: IAppState) => state.user;

export const selectUser = createSelector(
  selectUserState,
  (state: IUserState) => state.user
);

export const selectIsAuth = createSelector(
  selectUserState,
  (state: IUserState) => state.isAuthorized
);

export const selectUserError = createSelector(
  selectUserState,
  (state: IUserState) => state.errorMessage
);
