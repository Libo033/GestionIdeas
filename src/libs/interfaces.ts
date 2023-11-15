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

export interface INote {
  _id: string;
  title: string;
  content: string;
  create_date: string;
  expire_date: Date;
}
