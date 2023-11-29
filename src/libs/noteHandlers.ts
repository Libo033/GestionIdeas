import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { FormEvent } from "react";

export const handleNewNote = async (
  Event: FormEvent,
  router: AppRouterInstance
): Promise<void> => {
  try {
    Event.preventDefault();

    let fecha = (
      document.getElementById("note_handler_expire") as HTMLInputElement
    ).value;

    const response = await fetch(`/api/notes`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: (
          document.getElementById("note_handler_title") as HTMLInputElement
        ).value,
        content: (
          document.getElementById("note_handler_content") as HTMLInputElement
        ).value,
        expire_date: fecha ? new Date(fecha).getTime() : 0,
      }),
    });

    const result: Response = await response.json();

    if (result) {
      router.push("/home/notes");
    }
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
  }
};

export const handleEditNote = async (
  Event: FormEvent,
  id: string,
  router: AppRouterInstance
): Promise<void> => {
  try {
    Event.preventDefault();

    let fecha = (
      document.getElementById("note_handler_expire") as HTMLInputElement
    ).value;

    const response = await fetch(`/api/notes/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: (
          document.getElementById("note_handler_title") as HTMLInputElement
        ).value,
        content: (
          document.getElementById("note_handler_content") as HTMLInputElement
        ).value,
        expire_date: fecha ? new Date(fecha).getTime() : 0,
      }),
    });

    const result: Response = await response.json();

    if (result) {
      router.push("/home/notes");
    }
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
  }
};
