import * as firebase from 'firebase/app';

export interface AdditionalUserData {
  username?: string;
  firstName?: string;
  middleName?: string;
  lastName?: string;
  street?: string;
  zipcode?: string;
  houseNumber?: string;
  city?: string;
  country?: string;
}

export interface User extends firebase.UserInfo, AdditionalUserData {}

export interface UserState {
  readonly loading: boolean;
  readonly isLoggedIn: boolean;
  readonly userDetails: Partial<User> | null;
  readonly error: string | null;
}

export interface BackEndUser {
  id: string;
  firstname?: string;
  lastname?: string;
  email?: string;
  zipcode?: string;
  housenumber?: string;
}