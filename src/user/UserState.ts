import * as firebase from 'firebase/app';
import { string } from 'prop-types';

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
  firstname?: string;
  lastname?: string;
  email?: string;
  zipcode?: string;
  housenumber?: string;
}