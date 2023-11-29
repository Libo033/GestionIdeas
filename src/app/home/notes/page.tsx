"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import Note from "@/components/notes/Note";
import { INote } from "@/libs/interfaces";
import NotePlaceHolder from "@/components/notes/NotePlaceHolder";

const Notes = () => {
  const [notes, setNotes] = useState<INote[]>([]);
  const [loaded, setLoaded] = useState<boolean>(false);

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    fetch(`/api/notes`, { signal })
      .then((res) => res.json())
      .then((data) => {
        setNotes(data);
      })
      .catch((error) => {
        if (error instanceof Error) {
          console.log(error.message);
        }
      });

    setLoaded(true);

    return () => controller.abort();
  }, []);

  return (
    <main className={styles.Notes}>
      <div className="Dashboard_Breadcrumbs">
        <span>{"/ "}</span>
        <Link href={"/home"}>Home</Link>
        <span>{" / "}</span>
        <span>Notes</span>
      </div>
      <h1>Notes</h1>
      <Link href={"/home/notes/new"}>Create note</Link>
      <section className={styles.Notes_notesContainer}>
        {notes.length > 0 ? (
          notes.map((note) => (
            <Note
              key={note._id}
              title={note.title}
              content={note.content}
              create_date={note.create_date}
              expire_date={note.expire_date}
              _id={note._id}
            />
          ))
        ) : (
          <>
            {loaded && notes.length === 0 ? (
              <>
                <p className={styles.Notes_loaded}>
                  You'll see your notes here
                </p>
              </>
            ) : (
              <>
                <NotePlaceHolder />
                <NotePlaceHolder />
                <NotePlaceHolder />
                <NotePlaceHolder />
                <NotePlaceHolder />
                <NotePlaceHolder />
              </>
            )}
          </>
        )}
      </section>
    </main>
  );
};

export default Notes;
