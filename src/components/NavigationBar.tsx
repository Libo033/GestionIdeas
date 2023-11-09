"use client";
import React, { useState } from "react";
import styles from "./Components.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { Drawer } from "@mui/material";
import NavigationDrawer from "./NavigationDrawer";

const NavigationBar = () => {
  const [toggleDrawer, setToggleDrawer] = useState<boolean>(false);
  const router: AppRouterInstance = useRouter();

  return (
    <nav className={styles.NavigationBar}>
      <ul className={styles.NavigationBar_ul}>
        <li
          className={styles.NavigationBar_logoContainer}
          onClick={() => router.push("/dashboard")}
        >
          <Image src={"/img/logo.svg"} alt="logo" width={45} height={45} />
          <span>IDEARIO</span>
        </li>
        <li
          className={styles.NavigationBar_menuContainer}
          onClick={() => setToggleDrawer(true)}
        >
          <Image src={"/img/menu.svg"} alt="menu" width={45} height={45} />
        </li>
      </ul>
      <Drawer
        anchor="right"
        onClose={() => setToggleDrawer(false)}
        open={toggleDrawer}
      >
        <NavigationDrawer />
      </Drawer>
    </nav>
  );
};

export default NavigationBar;
