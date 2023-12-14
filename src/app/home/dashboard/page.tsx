"use client";
import { AuthContext } from "@/context/AuthContext";
import Link from "next/link";
import React, { useContext } from "react";
import styles from "./page.module.css";
import Note from "@/components/notes/Note";

const Dashboard = () => {
  const { user } = useContext(AuthContext);

  const noteData = {
    _id: "1",
    title: "valentinlibonati33@gmail.com",
    content: "12346789 asd",
    create_date: "22/11/2023, 14:41:49",
    expire_date: 1
  }

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
            <Note {...noteData} />
            <Note {...noteData} />
            <Note {...noteData} />
            <Note {...noteData} />
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
