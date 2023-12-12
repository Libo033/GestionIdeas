"use client";
import Link from "next/link";
import React from "react";
import styles from "../page.module.css";
import NoteHandler from "@/components/notes/NoteHandler";
import { ReadonlyURLSearchParams, useSearchParams } from "next/navigation";

const page = () => {
  const searchParams: ReadonlyURLSearchParams = useSearchParams();
  const id: string | null = searchParams.get("id");

  return (
    <main className={styles.Notes}>
      <div className="Dashboard_Breadcrumbs">
        <span>{"/ "}</span>
        <Link href={"/home"}>Inicio</Link>
        <span>{" / "}</span>
        <Link href={"/home/notes"}>Notas</Link>
        <span>{" / "}</span>
        <span>Editar</span>
      </div>
      <h1>Editar Nota</h1>
      {id && <NoteHandler id={id} />}
    </main>
  );
};

export default page;
