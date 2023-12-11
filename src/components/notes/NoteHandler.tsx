"use client";
import React, { FormEvent, useEffect } from "react";
import styles from "./Components.module.css";
import { INote, INoteHandler } from "@/libs/interfaces";
import { useRouter } from "next/navigation";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { TextField } from "@mui/material";
import { handleEditNote, handleNewNote } from "@/libs/noteHandlers";

const NoteHandler: React.FC<INoteHandler> = (props) => {
  const router: AppRouterInstance = useRouter();

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;
    let d = document;

    if (props.id) {
      fetch(`/api/notes/${props.id}`, { signal })
        .then((res) => res.json())
        .then((data: INote) => {
          (d.getElementById("note_handler_title") as HTMLInputElement).value =
            data.title;
          (d.getElementById("note_handler_content") as HTMLInputElement).value =
            data.content;
          if (data.expire_date !== 0) {
            (
              d.getElementById("note_handler_expire") as HTMLInputElement
            ).value = new Date(data.expire_date).toISOString().slice(0, 10);
          }
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
    <div className={styles.NoteHandler}>
      <form
        className={styles.NoteHandler_form}
        onSubmit={(Event: FormEvent) =>
          props.id
            ? handleEditNote(Event, props.id, router)
            : handleNewNote(Event, router)
        }
      >
        <div className={styles.NoteHandler_textField}>
          <TextField
            id="note_handler_title"
            InputLabelProps={{ shrink: true }}
            label="TITLE"
            variant="filled"
            autoComplete="off"
            fullWidth
            required
          />
        </div>
        <div className={styles.NoteHandler_textField}>
          <TextField
            id="note_handler_content"
            InputLabelProps={{ shrink: true }}
            label="CONTENT"
            variant="filled"
            autoComplete="off"
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
