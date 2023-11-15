"use client";
import { AuthContext } from "@/context/AuthContext";
import Link from "next/link";
import React, { useContext } from "react";
import styles from "./page.module.css";
import Note from "@/components/Note";

const Notes = () => {
  const { user } = useContext(AuthContext);

  return (
    <main className={styles.Notes}>
      <div className="Dashboard_Breadcrumbs">
        <span>{"/ "}</span>
        <Link href={"/home"}>Home</Link>
        <span>{" / "}</span>
        <span>Notes</span>
      </div>
      <h1>Notes</h1>
      <section className={styles.Notes_notesContainer}>
        <Note
          title={"Mi primera Nota - Valentin Libonati"}
          content={
            "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen."
          }
          create_date={new Date().toLocaleString()}
          expire_date={new Date()}
          _id={"1"}
        />
        <Note
          title={"Mi primera Nota - Valentin Libonati"}
          content={"Lorem Ipsum."}
          create_date={new Date().toLocaleString()}
          expire_date={new Date()}
          _id={"2"}
        />
        <Note
          title={"Mi primera Nota - Valentin Libonati"}
          content={
            "Probando el componente creado como ejemplo de mi primera nota."
          }
          create_date={new Date().toLocaleString()}
          expire_date={new Date()}
          _id={"3"}
        />
      </section>
    </main>
  );
};

export default Notes;
