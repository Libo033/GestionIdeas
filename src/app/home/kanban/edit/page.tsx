import React from "react";
import styles from "../page.module.css";
import Link from "next/link";
import { ReadonlyURLSearchParams, useSearchParams } from "next/navigation";

const Edit = () => {
  const searchParams: ReadonlyURLSearchParams = useSearchParams();
  const id: string | null = searchParams.get("id");

  return (
    <main className={styles.Kanban}>
      <div className="Dashboard_Breadcrumbs">
        <span>{"/ "}</span>
        <Link href={"/home"}>Inicio</Link>
        <span>{" / "}</span>
        <Link href={"/home/kanban"}>Kanban</Link>
        <span>{" / "}</span>
        <span>Editar</span>
      </div>
    </main>
  );
};

export default Edit;
