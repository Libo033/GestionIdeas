import React from "react";
import styles from "../page.module.css";
import Link from "next/link";
import KanbanHandler from "@/components/kanban/KanbanHandler";

const New = () => {
  return (
    <main className={styles.Kanban}>
      <div className="Dashboard_Breadcrumbs">
        <span>{"/ "}</span>
        <Link href={"/home"}>Home</Link>
        <span>{" / "}</span>
        <Link href={"/home/kanban"}>Kanban</Link>
        <span>{" / "}</span>
        <span>New</span>
      </div>
      <h1>New kanban</h1>
      <KanbanHandler id={undefined} />
    </main>
  );
};

export default New;
