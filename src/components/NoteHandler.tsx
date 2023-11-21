"use client";
import React from "react";
import styles from "./Components.module.css";
import { INoteHandler } from "@/libs/interfaces";
import { useRouter } from "next/navigation";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { TextField, TextareaAutosize } from "@mui/material";

const NoteHandler: React.FC<INoteHandler> = (props) => {
  const router: AppRouterInstance = useRouter();

  const handleNewNote = async (): Promise<void> => {};

  const handleEditNote = async (id: string): Promise<void> => {};

  return (
    <div className={styles.NoteHandler}>
      <form
        className={styles.NoteHandler_form}
        onSubmit={() => (props.id ? handleEditNote(props.id) : handleNewNote())}
      >
        <div className={styles.NoteHandler_textField}>
          <TextField
            id="note_handler_title"
            label="TITLE"
            variant="filled"
            fullWidth
          />
        </div>
        <div className={styles.NoteHandler_textField}>
          <TextField
            id="note_handler_title"
            label="CONTENT"
            variant="filled"
            multiline
            rows={5}
            fullWidth
          />
        </div>
        <button className={styles.NoteHandler_submit} type="submit">
          {props.id ? "EDITAR" : "CREAR"}
        </button>
      </form>
    </div>
  );
};

export default NoteHandler;
