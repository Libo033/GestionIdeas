"use client"
import React from "react";
import styles from "../page.module.css";
import Link from "next/link";
import { ReadonlyURLSearchParams, useSearchParams } from "next/navigation";

const IdKanban = () => {
  const searchParams: ReadonlyURLSearchParams = useSearchParams();
  const id: string | null = searchParams.get("id");

  return (
    <main className={styles.Kanban}>
      <div className="Dashboard_Breadcrumbs">
        <span>{"/ "}</span>
        <Link href={"/home"}>Home</Link>
        <span>{" / "}</span>
        <Link href={"/home/kanban"}>Kanban</Link>
        <span>{" / "}</span>
        <span>name</span>
      </div>
    </main>
  );
};

export default IdKanban;
