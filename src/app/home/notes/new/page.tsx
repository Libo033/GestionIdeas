import Link from "next/link";
import React from "react";
import styles from "../page.module.css";
import NoteHandler from "@/components/notes/NoteHandler";

const page = () => {
  return (
    <main className={styles.Notes}>
      <div className="Dashboard_Breadcrumbs">
        <span>{"/ "}</span>
        <Link href={"/home"}>Inicio</Link>
        <span>{" / "}</span>
        <Link href={"/home/notes"}>Notas</Link>
        <span>{" / "}</span>
        <span>Nueva</span>
      </div>
      <h1>Nueva Nota</h1>
      <NoteHandler id={undefined} />
    </main>
  );
};

export default page;
