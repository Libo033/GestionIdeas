"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import { IKanban } from "@/libs/interfaces";
import KanbanCard from "@/components/KanbanCard";

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
        <KanbanCard
          _id={"1"}
          name={"IDEARIO SUPER TITLE TO OVERFLOW IT"}
          content={[]}
          create_date={"22/11/2023, 10:15:23"}
        />
        <KanbanCard
          _id={"1"}
          name={"IDEARIO SUPER TITLE"}
          content={[]}
          create_date={"22/11/2023, 10:15:23"}
        />
        <KanbanCard
          _id={"1"}
          name={"IDEARIO SUPER TITLE"}
          content={[]}
          create_date={"22/11/2023, 10:15:23"}
        />
        <KanbanCard
          _id={"1"}
          name={"IDEARIO SUPER TITLE"}
          content={[]}
          create_date={"22/11/2023, 10:15:23"}
        />
        <KanbanCard
          _id={"1"}
          name={"IDEARIO SUPER TITLE"}
          content={[]}
          create_date={"22/11/2023, 10:15:23"}
        />
      </section>
    </main>
  );
};

export default Kanban;
