"use client";
import { AuthContext } from "@/context/AuthContext";
import Link from "next/link";
import React, { useContext } from "react";
import styles from "./page.module.css";

const Dashboard = () => {
  const { user } = useContext(AuthContext);

  return (
    <main className={styles.Dashboard}>
      <div className="Dashboard_Breadcrumbs">
        <span>{"/ "}</span>
        <Link href={"/home"}>Inicio</Link>
        <span>{" / "}</span>
        <span>Tablero</span>
      </div>
      Tablero
    </main>
  );
};

export default Dashboard;
