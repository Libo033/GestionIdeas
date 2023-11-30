import Link from "next/link";
import React, { useContext } from "react";
import styles from "./Components.module.css";
import Image from "next/image";
import { AuthContext } from "@/context/AuthContext";

const NavigationDrawer = () => {
  const { logOut } = useContext(AuthContext);

  return (
    <div className={styles.NavigationDrawer}>
      <div className={styles.NavigationDrawer_logoContainer}>
        <Image src={"/img/logo.svg"} alt="think" width={72} height={72} />
      </div>
      <ul className={styles.NavigationDrawer_ul1}>
        <li>
          <p className={styles.NavigationDrawer_ulTitle}>General</p>
        </li>
        <li>
          <Link className={styles.NavigationDrawer_link} href={"/home/dashboard"}>
            <div className={styles.NavigationDrawer_linkContent}>
              <Image
                src={"/img/dashboard.svg"}
                alt="dashboard"
                width={45}
                height={45}
              />
              <p>Dashboard</p>
            </div>
          </Link>
        </li>
        <li>
          <Link className={styles.NavigationDrawer_link} href={"/home/notes"}>
            <div className={styles.NavigationDrawer_linkContent}>
              <Image
                src={"/img/notes.svg"}
                alt="notes"
                width={45}
                height={45}
              />
              <p>Notes</p>
            </div>
          </Link>
        </li>
        <li>
          <Link className={styles.NavigationDrawer_link} href={"/home/kanban"}>
            <div className={styles.NavigationDrawer_linkContent}>
              <Image
                src={"/img/kanban.svg"}
                alt="kanban board"
                width={45}
                height={45}
              />
              <p>Kanban</p>
            </div>
          </Link>
        </li>
      </ul>
      <div className={styles.NavigationDrawer_logOutContainer}>
        {logOut && (
          <button onClick={() => logOut()} className={styles.NavigationDrawer_logOut}>
            <Image
              src={"/img/logout.svg"}
              alt="log out"
              width={30}
              height={30}
            />
            Log out
          </button>
        )}
      </div>
    </div>
  );
};

export default NavigationDrawer;
