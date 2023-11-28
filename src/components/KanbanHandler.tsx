"use client";
import { IKanbanHandler } from "@/libs/interfaces";
import styles from "./Components.module.css";
import React from "react";
import { TextField } from "@mui/material";

const KanbanHandler: React.FC<IKanbanHandler> = (props) => {
  return (
    <div className={styles.KanbanHandler}>
      <form className={styles.KanbanHandler_form}>
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
