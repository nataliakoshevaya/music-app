import { ProfileType } from 'src/app/profile/profile.type';

export interface IUserState {
  isAuthorized: boolean;
  user: ProfileType | null;
  errorMessage: string | null;
}

export const initialUserState: IUserState = {
  isAuthorized: false,
  user: null,
  errorMessage: null,
};
