import { User } from "firebase/auth";
import React, { SetStateAction } from "react";

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
  expire_date: number;
}

export interface INoteModal {
  _id: string;
  title: string;
  content: string;
  create_date: string;
  expire_date: number;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface INoteHandler {
  id: string | undefined;
}

export interface IKanban {
  _id: string;
  name: string;
  content: IKanbanItem[];
  create_date: string;
}

export interface IKanbanBoard {
  kanban: IKanban;
  setKanban: React.Dispatch<SetStateAction<IKanban | undefined>>;
}

export interface IKanbanItem {
  _id: string;
  data: string;
  status: "to do" | "doing" | "done";
}

export interface IKanbanHandler {
  id: string | undefined;
}

export interface IKanbanBoardContext {
  kanban: IKanban[];
  loaded: boolean;
  handleMoveNext: Function | null;
  handleMoveBack: Function | null;
  handleDeleteItem: Function | null;
}

export interface IKanbanItemComponent {
  item: IKanbanItem;
  idKanban: string;
}

export interface IItemsHandler {
  idKanban: string | null;
  idItem: string | null;
}
