"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import styles from "./page.module.css";
import Note from "@/components/notes/Note";
import { INote } from "@/libs/interfaces";

const Dashboard = () => {
  const [nextNotes, setNextNotes] = useState<INote[]>([]);

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    fetch(`/api/notes/next`, { signal })
      .then((res) => res.json())
      .then((data) => {
        setNextNotes(data);
      })
      .catch((error) => {
        if (error instanceof Error) {
          console.log(error.message);
        }
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
            {nextNotes.slice(0, 6).map((note) => (
              <Note {...note} />
            ))}
          </section>
        </div>
        <div className={styles.Dashboard_kanban}>
          <p className={styles.Dashboard_kanbanSubTitle}>Kanban en proceso:</p>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
