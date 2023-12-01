"use client";
import { IKanban, IKanbanBoardContext } from "@/libs/interfaces";
import React, { useState, createContext } from "react";

const defaultValue: IKanbanBoardContext = {
  
};

export const KanbanBoardContext: React.Context<IKanbanBoardContext> =
  createContext(defaultValue);

export const KanbanBoardContextProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {


  return (
    <KanbanBoardContext.Provider
      value={{

      }}
    >
      {children}
    </KanbanBoardContext.Provider>
  );
};
