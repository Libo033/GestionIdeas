"use client";
import Link from "next/link";
import React, { useContext } from "react";
import styles from "./page.module.css";
import KanbanCard from "@/components/kanban/KanbanCard";
import KanbanCardPlaceholder from "@/components/kanban/KanbanCardPlaceholder";
import { KanbanBoardContext } from "@/context/KanbanBoardContext";

const Kanban = () => {
  const { kanban, loaded } = useContext(KanbanBoardContext);

  return (
    <main className={styles.Kanban}>
      <div className="Dashboard_Breadcrumbs">
        <span>{"/ "}</span>
        <Link href={"/home"}>Inicio</Link>
        <span>{" / "}</span>
        <span>Kanban</span>
      </div>
      <h1>Kanban</h1>
      <Link href={"/home/kanban/new"}>Crear kanban</Link>
      <section className={styles.Kanban_cardsContainer}>
        {kanban.length > 0 ? (
          kanban.map((kanban) => (
            <KanbanCard
              key={kanban._id}
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
                  Veras tus kanban aquí.
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
