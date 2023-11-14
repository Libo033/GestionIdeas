"use client";
import { AuthContext } from "@/context/AuthContext";
import Link from "next/link";
import React, { useContext } from "react";
import styles from "./page.module.css";

const Notes = () => {
  const { user } = useContext(AuthContext);

  return (
    <main className={styles.Notes}>
      <div className="Dashboard_Breadcrumbs">
        <span>{"/ "}</span>
        <Link href={"/home"}>Home</Link>
        <span>{" / "}</span>
        <span>Notes</span>
      </div>
    </main>
  );
};

export default Notes;
