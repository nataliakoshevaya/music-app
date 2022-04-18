import { Action, createReducer, on } from '@ngrx/store';
import * as AuthActions from '../actions/auth.actions';
import { initialAuthState, IAuthState } from '../state/auth.state';

export const authReducers = createReducer(
  initialAuthState,
  on(AuthActions.authFailure, (state: IAuthState, { error }) => ({
    ...state,
    errorMessage: error,
  }))
);

export function reducer(state: IAuthState | undefined, action: Action) {
  return authReducers(state, action);
}
