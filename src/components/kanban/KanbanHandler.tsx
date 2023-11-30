"use client";
import { IKanbanHandler } from "@/libs/interfaces";
import styles from "./Components.module.css";
import React, { FormEvent } from "react";
import { TextField } from "@mui/material";
import { handleCreateKanban } from "@/libs/kanbanHandlers";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { useRouter } from "next/navigation";

const KanbanHandler: React.FC<IKanbanHandler> = (props) => {
  const router: AppRouterInstance = useRouter();

  return (
    <div className={styles.KanbanHandler}>
      <form
        onSubmit={(Event: FormEvent) => handleCreateKanban(Event, router)}
        className={styles.KanbanHandler_form}
      >
        <div className={styles.KanbanHandler_textField}>
          <TextField
            id="kanban_handler_name"
            InputLabelProps={{ shrink: true }}
            label="NAME"
            variant="filled"
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
