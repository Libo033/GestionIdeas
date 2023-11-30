import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { FormEvent } from "react";

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
    }
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
  }
};

export const handleEditKanban = async (
  Event: FormEvent,
  router: AppRouterInstance
): Promise<void> => {
  try {
    Event.preventDefault();
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
  }
};
