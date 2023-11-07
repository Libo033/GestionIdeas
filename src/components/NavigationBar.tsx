import React from "react";
import styles from "./Components.module.css";

const NavigationBar = () => {
  return (
    <nav className={styles.NavigationBar}>
      <ul className={styles.NavigationBar_ul}>
        <li className={styles.NavigationBar_logoContainer}></li>
        <li className={styles.NavigationBar_menuContainer}></li>
      </ul>
    </nav>
  );
};

export default NavigationBar;
