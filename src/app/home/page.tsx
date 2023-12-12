"use client";
import { AuthContext } from "@/context/AuthContext";
import React, { useContext } from "react";
import styles from "./page.module.css";
import Image from "next/image";

const Dashboard = () => {
  const { user } = useContext(AuthContext);

  return (
    <main className={styles.Home}>
      {user && (
        <>
          <div className={styles.Home_welcome}>
            <h1>Administra todas tus tareas aquí</h1>
          </div>
          <section className={styles.Home_section}>
            <article className={styles.Home_article}>
              <p className={styles.Home_articleTitle}>KANBAN</p>
              <Image
                src={"/img/notesflatline.svg"}
                alt="kanban"
                width={210}
                height={210}
              />
              <p>
                <b>Kanban</b> es un sistema visual para gestionar el trabajo a
                medida que avanza en un proceso. Kanban visualiza tanto el
                proceso (el flujo de trabajo) como el trabajo real que pasa por
                ese proceso.
              </p>
            </article>
            <article className={styles.Home_article}>
              <p className={styles.Home_articleTitle}>NOTES</p>
              <Image
                src={"/img/notesoutline.svg"}
                alt="kanban"
                width={210}
                height={210}
              />
              <p>
                Nuestra interfaz está diseñada para que puedas organizar tus{" "}
                <b>notas</b> de manera intuitiva y rápida. Ya sea por proyectos,
                temas o fechas, encontrarás la estructura que se adapte mejor a
                tu estilo de trabajo.
              </p>
            </article>
          </section>
          <div className={styles.Home_buttonAdminContainer}>
            <button className={styles.Home_buttonAdmin}>
              Administra tus tareas
            </button>
          </div>
        </>
      )}
    </main>
  );
};

export default Dashboard;


