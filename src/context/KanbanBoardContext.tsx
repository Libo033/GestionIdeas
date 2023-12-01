"use client";
import { IHandleMoveItem, IKanbanBoardContext } from "@/libs/interfaces";
import React, { createContext } from "react";

const defaultValue: IKanbanBoardContext = {
  handleMoveNext: null,
  handleMoveBack: null,
  handleDeleteItem: null,
};

export const KanbanBoardContext: React.Context<IKanbanBoardContext> =
  createContext(defaultValue);

export const KanbanBoardContextProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const handleMoveBack = (props: IHandleMoveItem): void => {
    // PRIMERO ELIMINAR DEL USESTATE EL ITEM
    // SEGUNDO ELIMINARLO DE LA DB CON LA API
  };

  const handleMoveNext = (props: IHandleMoveItem): void => {
    // PRIMERO ELIMINAR DEL USESTATE EL ITEM
    // SEGUNDO ELIMINARLO DE LA DB CON LA API
  };

  const handleDeleteItem = () => {
    // PRIMERO ELIMINAR DEL USESTATE EL ITEM
    // SEGUNDO ELIMINARLO DE LA DB CON LA API
  };

  return (
    <KanbanBoardContext.Provider
      value={{ handleMoveBack, handleDeleteItem, handleMoveNext }}
    >
      {children}
    </KanbanBoardContext.Provider>
  );
};
