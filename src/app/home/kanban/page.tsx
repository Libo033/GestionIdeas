"use client";
import { AuthContext } from "@/context/AuthContext";
import Link from "next/link";
import React, { useContext } from "react";
import styles from "./page.module.css";

const Kanban = () => {
  const { user } = useContext(AuthContext);

  return (
    <main className={styles.Kanban}>
      <div className="Dashboard_Breadcrumbs">
        <span>{"/ "}</span>
        <Link href={"/home"}>Home</Link>
        <span>{" / "}</span>
        <span>Kanban</span>
      </div>
    </main>
  );
};

export default Kanban;
