"use client";
import React, { useEffect, useState } from "react";
import styles from "../page.module.css";
import Link from "next/link";
import { IKanban } from "@/libs/interfaces";
import KanbanBoard from "@/components/kanban/KanbanBoard";

const IdKanban = ({ params }: { params: { id: string } }) => {
  const [kanban, setKanban] = useState<IKanban | undefined>();

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    if (params.id) {
      fetch(`/api/kanban/${params.id}`, { signal })
        .then((res) => res.json())
        .then((data) => {
          setKanban(data);
        })
        .catch((error) => {
          if (error instanceof Error) {
            console.log(error.message);
          }
        });
    }

    return () => controller.abort();
  }, [params.id]);

  return (
    <main className={styles.Kanban}>
      <div className="Dashboard_Breadcrumbs">
        <span>{"/ "}</span>
        <Link href={"/home"}>Home</Link>
        <span>{" / "}</span>
        <Link href={"/home/kanban"}>Kanban</Link>
        <span>{" / "}</span>
        <span>{kanban?.name}</span>
      </div>
      {kanban && (
        <>
          <h1>{kanban.name}</h1>
          <Link href={"/home/kanban"}>Create item</Link>
          <div className={styles.Kanban_boardContainer}>
            <KanbanBoard kanban={kanban} setKanban={setKanban} />
          </div>
        </>
      )}
    </main>
  );
};

export default IdKanban;
