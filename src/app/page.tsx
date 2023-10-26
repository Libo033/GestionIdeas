import Image from "next/image";
import styles from "./page.module.css";
import Login from "@/components/Login";
import Register from "@/components/Register";
import { Divider } from "@mui/material";

export default function Home() {
  return (
    <main className={styles.main}>
      <Login forgotPass={""} signUp={""} />
      <div className={styles.divider}>
        <Divider/>
      </div>
    </main>
  );
}
