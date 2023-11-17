import Link from "next/link";
import React from "react";
import styles from "./page.module.css";

const page = () => {
  return (
    <main className={styles.EditNote}>
      <div className="Dashboard_Breadcrumbs">
        <span>{"/ "}</span>
        <Link href={"/home"}>Home</Link>
        <span>{" / "}</span>
        <Link href={"/home/notes"}>Notes</Link>
        <span>{" / "}</span>
        <span>Edit</span>
      </div>
      <h1>Edit Note</h1>
    </main>
  );
};

export default page;
