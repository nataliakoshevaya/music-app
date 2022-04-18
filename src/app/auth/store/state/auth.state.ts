import { RouterReducerState } from '@ngrx/router-store';

export interface IAuthState {
  isAuthorized: boolean;
  errorMessage: string | null;
}

export const initialAuthState: IAuthState = {
  isAuthorized: false,
  errorMessage: null,
};

export interface IAppState {
  router?: RouterReducerState;
  auth: IAuthState;
}
