import { User } from "firebase/auth";

export interface IAuthContext {
  user: User | null;
  googleSignIn: Function | null;
  facebookSignIn: Function | null;
  logOut: Function | null;
  loaded: boolean;
}