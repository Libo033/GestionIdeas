"use client";
import React, { useContext, useEffect, useState } from "react";
import styles from "../page.module.css";
import Link from "next/link";
import { IKanban } from "@/libs/interfaces";
import KanbanBoard from "@/components/kanban/KanbanBoard";
import { KanbanBoardContext } from "@/context/KanbanBoardContext";

const IdKanban = ({ params }: { params: { id: string } }) => {
  const [kanban, setKanban] = useState<IKanban | undefined>();
  const { kanban: kanbanContext } = useContext(KanbanBoardContext);

  useEffect(() => {
    if (params.id && kanbanContext) {
      setKanban(kanbanContext.find((k) => k._id === params.id));
    }
  }, [params.id, kanbanContext]);

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
