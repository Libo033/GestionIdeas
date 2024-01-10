"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import styles from "./page.module.css";
import Note from "@/components/notes/Note";
import { IKanban, INote } from "@/libs/interfaces";
import KanbanCard from "@/components/kanban/KanbanCard";

const Dashboard = () => {
  const [nextNotes, setNextNotes] = useState<INote[]>([]);
  const [kanban, setKanban] = useState<IKanban[]>([]);

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    fetch(`/api/notes/next`, { signal })
      .then((res) => res.json())
      .then((data: INote[]) => {
        setNextNotes(data);
      })
      .catch((error: Error) => {
        console.log(error.message);
      });

    return () => controller.abort();
  }, []);

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    fetch(`/api/kanban`, { signal })
      .then((res) => res.json())
      .then((data: IKanban[]) => {
        setKanban(data);
      })
      .catch((error: Error) => {
        console.log(error.message);
      });

    return () => controller.abort();
  }, []);

  return (
    <main className={styles.Dashboard}>
      <div className="Dashboard_Breadcrumbs">
        <span>{"/ "}</span>
        <Link href={"/home"}>Inicio</Link>
        <span>{" / "}</span>
        <span>Tablero</span>
      </div>
      <h1>Tablero</h1>
      <div className={styles.Dashboard_container}>
        <div className={styles.Dashboard_notes}>
          <p className={styles.Dashboard_notesSubTitle}>Proximas notas:</p>
          <section>
            {/*Maximo de 7 notas*/}
            {nextNotes.length > 0 ? (
              nextNotes
                .slice(0, 6)
                .map((note) => <Note key={note._id} {...note} />)
            ) : (
              <>
                <p className={styles.Dashboard_nextNotesLoaded}>
                  Veras tus notas aquí.
                </p>
              </>
            )}
          </section>
        </div>
        <div className={styles.Dashboard_kanban}>
          <p className={styles.Dashboard_kanbanSubTitle}>Kanban en proceso:</p>
          <section>
            {kanban.length > 0 ? (
              kanban.slice(0, 4).map((k) => <KanbanCard key={k._id} {...k} />)
            ) : (
              <>
                <p className={styles.Dashboard_nextNotesLoaded}>
                  Veras tus kanban aquí.
                </p>
              </>
            )}
          </section>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
