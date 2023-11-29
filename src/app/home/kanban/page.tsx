"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import { IKanban } from "@/libs/interfaces";
import KanbanCard from "@/components/KanbanCard";
import KanbanCardPlaceholder from "@/components/KanbanCardPlaceholder";

const Kanban = () => {
  const [kanban, setKanban] = useState<IKanban[]>([]);
  const [loaded, setLoaded] = useState<boolean>(false);

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    fetch(`/api/kanban`, { signal })
      .then((res) => res.json())
      .then((data) => {
        setKanban(data);
      })
      .catch((error) => {
        if (error instanceof Error) {
          console.log(error.message);
        }
      });

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
      <Link href={"/home/kanban/new"}>Create kanban</Link>
      <section className={styles.Kanban_cardsContainer}>
        {kanban.length > 0 ? (
          kanban.map((kanban) => (
            <KanbanCard
              _id={kanban._id}
              name={kanban.name}
              content={kanban.content}
              create_date={kanban.create_date}
            />
          ))
        ) : (
          <>
            {loaded && kanban.length === 0 ? (
              <>
                <p className={styles.Kanban_loaded}>
                  You'll see your kanban here
                </p>
              </>
            ) : (
              <>
                <KanbanCardPlaceholder />
                <KanbanCardPlaceholder />
                <KanbanCardPlaceholder />
                <KanbanCardPlaceholder />
                <KanbanCardPlaceholder />
                <KanbanCardPlaceholder />
              </>
            )}
          </>
        )}
      </section>
    </main>
  );
};

export default Kanban;
