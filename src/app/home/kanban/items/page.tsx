"use client";
import React, { useContext, useEffect, useState } from "react";
import styles from "../page.module.css";
import Link from "next/link";
import { ReadonlyURLSearchParams, useSearchParams } from "next/navigation";
import { KanbanBoardContext } from "@/context/KanbanBoardContext";
import { IKanban } from "@/libs/interfaces";
import ItemsHandler from "@/components/item/ItemsHandler";

const Items = () => {
  const [kanbanOwner, setKanbanOwner] = useState<IKanban | undefined>();
  const { kanban } = useContext(KanbanBoardContext);
  const searchParams: ReadonlyURLSearchParams = useSearchParams();
  const idKanban: string | null = searchParams.get("kanban");
  const idItem: string | null = searchParams.get("item");

  useEffect(() => {
    if (kanban) {
      setKanbanOwner(kanban.find((k) => k._id === idKanban));
    }
  }, [idKanban, kanban]);

  return (
    <main className={styles.Kanban}>
      <div className="Dashboard_Breadcrumbs">
        <span>{"/ "}</span>
        <Link href={"/home"}>Home</Link>
        <span>{" / "}</span>
        <Link href={"/home/kanban"}>Kanban</Link>
        <span>{" / "}</span>
        {kanbanOwner && (
          <Link href={`/home/kanban/${kanbanOwner._id}`}>
            {kanbanOwner.name}
          </Link>
        )}
        <span>{" / "}</span>
        <span>New item</span>
      </div>
      <h1>New item</h1>
      <div className={styles.Kanban_boardContainer}>
        <ItemsHandler idKanban={idKanban} idItem={idItem} />
      </div>
    </main>
  );
};

export default Items;
