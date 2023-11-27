"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import { IKanban } from "@/libs/interfaces";

const Kanban = () => {
  const [kanban, setKanban] = useState<IKanban[]>([]);
  const [loaded, setLoaded] = useState<boolean>(false);

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    setLoaded(true);

    return () => controller.abort();
  }, []);

  return (
    <main className={styles.Kanban}>
      <div className="Dashboard_Breadcrumbs">
        <span>{"/ "}</span>
        <Link href={"/home"}>Home</Link>
        <span>{" / "}</span>
        <span>Kanban</span>
      </div>
      <h1>Kanban</h1>
      <section className={styles.Kanban_cardsContainer}>

      </section>
    </main>
  );
};

export default Kanban;
