"use client";
import { AuthContext } from "@/context/AuthContext";
import React, { useContext } from "react";
import styles from "./page.module.css";

const Dashboard = () => {
  const { user } = useContext(AuthContext);

  return (
    <main className={styles.Dashboard}>
      <div className="Dashboard_Breadcrumbs">
        <span>{"/ "}</span>
        <span>Home</span>
      </div>
      {user && (
        <>
          <div className={styles.Dashboard_welcome}>
            <p>
              Bienvenido {user.displayName} a <b>IDEARIO</b>.
            </p>
          </div>
        </>
      )}
    </main>
  );
};

export default Dashboard;
