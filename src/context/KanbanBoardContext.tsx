"use client";
import { IKanban, IKanbanBoardContext, IKanbanItem } from "@/libs/interfaces";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import React, { FormEvent, createContext, useEffect, useState } from "react";

const kanban_init: IKanban[] = [
  { _id: "", name: "", content: [], create_date: "" },
];

const defaultValue: IKanbanBoardContext = {
  kanban: kanban_init,
  loaded: false,
  handleMoveNext: null,
  handleMoveBack: null,
  handleDeleteItem: null,
  handleCreateItem: null,
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

  const handleCreateItem = async (
    Event: FormEvent,
    router: AppRouterInstance,
    idKanban: string
  ) => {
    try {
      Event.preventDefault();

      let item = (
        document.getElementById("item_handler_text") as HTMLInputElement
      ).value;

      const response = await fetch(`/api/kanban/items`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          idKanban,
          item,
        }),
      });

      const result: {
        Item: IKanbanItem;
        status: number;
        kanban: string;
      } = await response.json();

      let allKanban = kanban;
      allKanban.forEach((k) => {
        if (k._id === result.kanban) k.content.push(result.Item);
      });

      setKanban(allKanban);

      if (result.status === 201) {
        router.push(`/home/kanban/${idKanban}`);
      }
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
      }
    }
  };

  const handleMoveBack = (idKanban: string, idItem: string): void => {
    try {
      // PRIMERO MOVER EN EL USESTATE EL ITEM
      let kanbanToMod = kanban.find((k) => k._id === idKanban);
      let kanbanWithout = kanban.filter((k) => k._id !== idKanban);

      if (kanbanToMod) {
        kanbanToMod.content.forEach((k) => {
          if (k._id === idItem) {
            switch (k.status) {
              case "doing":
                k.status = "to do";
                break;
              case "done":
                k.status = "doing";
                break;
              default:
                throw new Error("it couldn't be moved the item");
                break;
            }
          }
        });

        setKanban([...kanbanWithout, kanbanToMod]);
      }
      // SEGUNDO MOVERLO DE LA DB CON LA API
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
      }
    }
  };

  const handleMoveNext = (idKanban: string, idItem: string): void => {
    try {
      // PRIMERO MOVER EN EL USESTATE EL ITEM
      let kanbanToMod = kanban.find((k) => k._id === idKanban);
      let kanbanWithout = kanban.filter((k) => k._id !== idKanban);

      if (kanbanToMod) {
        kanbanToMod.content.forEach((k) => {
          if (k._id === idItem) {
            switch (k.status) {
              case "to do":
                k.status = "doing";
                break;
              case "doing":
                k.status = "done";
                break;
              default:
                throw new Error("it couldn't be moved the item");
                break;
            }
          }
        });

        setKanban([...kanbanWithout, kanbanToMod]);
      }
      // SEGUNDO MOVERLO DE LA DB CON LA API
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
      }
    }
  };

  const handleDeleteItem = async (idKanban: string, idItem: string) => {
    try {
      // PRIMERO ELIMINAR DEL USESTATE EL ITEM
      let kanbanToMod = kanban.find((k) => k._id === idKanban);
      let kanbanWithout = kanban.filter((k) => k._id !== idKanban);

      if (kanbanToMod) {
        // delete item by ID
        kanbanToMod.content = kanbanToMod.content.filter(
          (k) => k._id !== idItem
        );

        setKanban([...kanbanWithout, kanbanToMod]);
      }
      // SEGUNDO ELIMINARLO DE LA DB CON LA API
      await fetch(`/api/kanban/items?kanban=${idKanban}&item=${idItem}`, {
        method: "DELETE",
      });
    } catch (error) {
      if (error instanceof Error) {
        console.log("KanbanBoardContext: " + error.message);
      }
    }
  };

  return (
    <KanbanBoardContext.Provider
      value={{
        kanban,
        loaded,
        handleMoveBack,
        handleDeleteItem,
        handleMoveNext,
        handleCreateItem,
      }}
    >
      {children}
    </KanbanBoardContext.Provider>
  );
};
