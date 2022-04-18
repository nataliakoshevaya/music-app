import { ProfileType } from 'src/app/profile/profile.type';

export type UserCredentialType = {
  email: string;
  password: string;
};

export type UserBodyType = {
  email: string;
  id: number;
};

export type UserResponseType = {
  accessToken: string;
  user: ProfileType;
};

export type RegistrationUsersDataType = {
  email: string;
  firstName: string;
  secondName: string;
  password: string;
  confirmPassword?: string;
  phoneNumber: string;
};
