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
            <h1>Administra todas tus tareas aquí.</h1>
          </div>
          <section className={styles.Dashboard_section}>
            <article className={styles.Dashboard_article}>
              <h2 className={styles.Dashboard_subTitle}>Kanban</h2>
              <p>
                <b>Kanban</b> es un sistema visual para gestionar el trabajo a
                medida que avanza en un proceso. Kanban visualiza tanto el
                proceso (el flujo de trabajo) como el trabajo real que pasa por
                ese proceso.
                <br />
                <br />
                El objetivo de <b>Kanban</b> es identificar posibles cuellos de
                botella en el proceso y solucionarlos para que el trabajo pueda
                fluir a través de él de forma rentable y a una velocidad o
                rendimiento óptimos.
              </p>
            </article>
            <article className={styles.Dashboard_article}>
              <h2 className={styles.Dashboard_subTitle}>Notes</h2>
              <p>
                Nuestra interfaz está diseñada para que puedas organizar tus{" "}
                <b>notas</b> de manera intuitiva y rápida. Ya sea por proyectos, temas
                o fechas, encontrarás la estructura que se adapte mejor a tu
                estilo de trabajo.
                <br /> <br />
                Tu inspiración no espera a que estés frente a tu escritorio.
                Accede a tus notas desde cualquier dispositivo, ya sea tu
                computadora, tablet o teléfono móvil.
                <br />
                ¡Mantene tus ideas al alcance de tu mano en todo momento!
              </p>
            </article>
          </section>
        </>
      )}
    </main>
  );
};

export default Dashboard;
