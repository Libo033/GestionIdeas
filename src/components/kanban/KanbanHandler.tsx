"use client";
import { IKanban, IKanbanHandler } from "@/libs/interfaces";
import styles from "./Components.module.css";
import React, { FormEvent, useEffect } from "react";
import { TextField } from "@mui/material";
import { handleCreateKanban, handleEditKanban } from "@/libs/kanbanHandlers";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { useRouter } from "next/navigation";

const KanbanHandler: React.FC<IKanbanHandler> = (props) => {
  const router: AppRouterInstance = useRouter();

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;
    let d = document;

    if (props.id) {
      fetch(`/api/kanban/${props.id}`, { signal })
        .then((res) => res.json())
        .then((data: IKanban) => {
          (d.getElementById("kanban_handler_name") as HTMLInputElement).value =
            data.name;
        })
        .catch((error) => {
          if (error instanceof Error) {
            console.log(error.message);
          }
        });
    }

    return () => controller.abort();
  }, []);

  return (
    <div className={styles.KanbanHandler}>
      <form
        onSubmit={(Event: FormEvent) =>
          props.id
            ? handleEditKanban(Event, router, props.id)
            : handleCreateKanban(Event, router)
        }
        className={styles.KanbanHandler_form}
      >
        <div className={styles.KanbanHandler_textField}>
          <TextField
            id="kanban_handler_name"
            InputLabelProps={{ shrink: true }}
            label="NOMBRE"
            variant="filled"
            autoComplete="off"
            fullWidth
            required
          />
        </div>
        <button className={styles.KanbanHandler_submit} type="submit">
          {props.id ? "EDITAR" : "CREAR"}
        </button>
      </form>
    </div>
  );
};

export default KanbanHandler;
