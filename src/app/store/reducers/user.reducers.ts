import { Action, createReducer, on } from '@ngrx/store';
import * as UserActions from '../actions/user.action';
import { initialUserState, IUserState } from '../state/user.state';

export const userReducers = createReducer(
  initialUserState,
  on(UserActions.getUserSuccess, (state: IUserState, { user }) => ({
    ...state,
    isAuthorized: true,
    user,
  })),
  on(UserActions.getUserFailure, (state: IUserState, { error }) => ({
    ...state,
    errorMessage: error,
  })),
  on(UserActions.logOut, (state: IUserState) => ({
    ...state,
    isAuthorized: false,
    user: null,
  }))
);

export function reducer(state: IUserState | undefined, action: Action) {
  return userReducers(state, action);
}
