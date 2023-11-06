import { User } from "firebase/auth";

export interface IAuthContext {
  user: User | null;
  googleSignIn: Function | null;
  facebookSignIn: Function | null;
  logOut: Function | null;
  signUp: Function | null;
  signIn: Function | null;
  recoverPassword: Function | null;
  loaded: boolean;
}
