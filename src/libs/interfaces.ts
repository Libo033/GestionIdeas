import { User } from "firebase/auth";
import React from "react";

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

export interface INoteModal {
  _id: string;
  title: string;
  content: string;
  create_date: string;
  expire_date: Date;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface INoteHandler {
  id: string | undefined;
}