import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { FormEvent } from "react";
import { IKanban } from "./interfaces";

export const handleCreateKanban = async (
  Event: FormEvent,
  router: AppRouterInstance
): Promise<void> => {
  try {
    Event.preventDefault();

    const response = await fetch(`/api/kanban`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: (
          document.getElementById("kanban_handler_name") as HTMLInputElement
        ).value,
      }),
    });

    const result: Response = await response.json();

    if (result) {
      router.push("/home/kanban");
      setTimeout(() => {
        location.reload();
      }, 600);
    }
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
  }
};

export const handleEditKanban = async (
  Event: FormEvent,
  router: AppRouterInstance,
  id: string
): Promise<void> => {
  try {
    Event.preventDefault();

    let newName = (
      document.getElementById("kanban_handler_name") as HTMLInputElement
    ).value;

    const response = await fetch(`/api/kanban/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: newName,
      }),
    });

    const result: { status: number; kanban: IKanban } = await response.json();

    if (result.status === 200) {
      router.push("/home/kanban");
      setTimeout(() => {
        location.reload();
      }, 600);
    }
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
  }
};
