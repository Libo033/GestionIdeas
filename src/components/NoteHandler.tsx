"use client";
import React, { FormEvent } from "react";
import styles from "./Components.module.css";
import { INoteHandler } from "@/libs/interfaces";
import { useRouter } from "next/navigation";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { TextField } from "@mui/material";

const NoteHandler: React.FC<INoteHandler> = (props) => {
  const router: AppRouterInstance = useRouter();

  const handleNewNote = async (Event: FormEvent): Promise<void> => {
    try {
      Event.preventDefault();

      let fecha = (
        document.getElementById("note_handler_expire") as HTMLInputElement
      ).value;

      const response = await fetch(`/api/notes/new`, {
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

      if (result.status === 200) {
        router.push("/home/notes");
      }
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
      }
    }
  };

  const handleEditNote = async (
    Event: FormEvent,
    id: string
  ): Promise<void> => {};

  return (
    <div className={styles.NoteHandler}>
      <form
        className={styles.NoteHandler_form}
        onSubmit={(Event: FormEvent) =>
          props.id ? handleEditNote(Event, props.id) : handleNewNote(Event)
        }
      >
        <div className={styles.NoteHandler_textField}>
          <TextField
            id="note_handler_title"
            label="TITLE"
            variant="filled"
            fullWidth
            required
          />
        </div>
        <div className={styles.NoteHandler_textField}>
          <TextField
            id="note_handler_content"
            label="CONTENT"
            variant="filled"
            multiline
            rows={5}
            fullWidth
            required
          />
        </div>
        <div className={styles.NoteHandler_textField}>
          <label
            className={styles.NoteHandler_expireLabel}
            htmlFor="note_handler_expire"
          >
            EXPIRE DATE
          </label>
          <input
            id="note_handler_expire"
            className={styles.NoteHandler_expireInput}
            type="date"
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
