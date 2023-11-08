import React from "react";
import styles from "./Components.module.css";
import Image from "next/image";

const NavigationBar = () => {
  return (
    <nav className={styles.NavigationBar}>
      <ul className={styles.NavigationBar_ul}>
        <li className={styles.NavigationBar_logoContainer}>
          <Image src={"/img/logo.svg"} alt="logo" width={45} height={45} />
          <span>IDEARIO</span>
        </li>
        <li className={styles.NavigationBar_menuContainer}>
          <Image src={"/img/menu.svg"} alt="menu" width={45} height={45} />
        </li>
      </ul>
    </nav>
  );
};

export default NavigationBar;
