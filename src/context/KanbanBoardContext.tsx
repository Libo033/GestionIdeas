"use client";
import { IKanban, IKanbanBoardContext } from "@/libs/interfaces";
import React, { createContext, useEffect, useState } from "react";

const kanban_init: IKanban[] = [
  { _id: "", name: "", content: [], create_date: "" },
];

const defaultValue: IKanbanBoardContext = {
  kanban: kanban_init,
  loaded: false,
  handleMoveNext: null,
  handleMoveBack: null,
  handleDeleteItem: null,
};

export const KanbanBoardContext: React.Context<IKanbanBoardContext> =
  createContext(defaultValue);

export const KanbanBoardContextProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [kanban, setKanban] = useState<IKanban[]>([]);
  const [loaded, setLoaded] = useState<boolean>(false);

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    fetch(`/api/kanban`, { signal })
      .then((res) => res.json())
      .then((data) => {
        setKanban(data);
      })
      .catch((error) => {
        if (error instanceof Error) {
          console.log(error.message);
        }
      });

    setLoaded(true);

    return () => controller.abort();
  }, []);

  const handleMoveBack = (idKanban: string, idItem: string): void => {
    // PRIMERO MOVER EN EL USESTATE EL ITEM
    console.log(idKanban);
    console.log(idItem);
    // SEGUNDO MOVERLO DE LA DB CON LA API
  };

  const handleMoveNext = (idKanban: string, idItem: string): void => {
    // PRIMERO MOVER EN EL USESTATE EL ITEM
    console.log(idKanban);
    console.log(idItem);
    // SEGUNDO MOVERLO DE LA DB CON LA API
  };

  const handleDeleteItem = (idKanban: string, idItem: string) => {
    // PRIMERO ELIMINAR DEL USESTATE EL ITEM
    console.log(idKanban);
    console.log(idItem);
    // SEGUNDO ELIMINARLO DE LA DB CON LA API
  };

  return (
    <KanbanBoardContext.Provider
      value={{
        kanban,
        loaded,
        handleMoveBack,
        handleDeleteItem,
        handleMoveNext,
      }}
    >
      {children}
    </KanbanBoardContext.Provider>
  );
};
