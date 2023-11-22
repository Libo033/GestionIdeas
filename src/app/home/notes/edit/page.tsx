"use client";
import Link from "next/link";
import React from "react";
import styles from "./page.module.css";
import NoteHandler from "@/components/NoteHandler";
import { ReadonlyURLSearchParams, useSearchParams } from "next/navigation";

const page = () => {
  const searchParams: ReadonlyURLSearchParams = useSearchParams();
  const id: string | null = searchParams.get("id");

  return (
    <main className={styles.EditNote}>
      <div className="Dashboard_Breadcrumbs">
        <span>{"/ "}</span>
        <Link href={"/home"}>Home</Link>
        <span>{" / "}</span>
        <Link href={"/home/notes"}>Notes</Link>
        <span>{" / "}</span>
        <span>Edit</span>
      </div>
      <h1>Edit Note</h1>
      {id && <NoteHandler id={id} />}
    </main>
  );
};

export default page;
