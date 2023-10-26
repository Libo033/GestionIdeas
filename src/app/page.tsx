import styles from "./page.module.css";
import Login from "@/components/Login";
import { Divider } from "@mui/material";
import LoginButtonGroup from "@/components/LoginButtonGroup";

export default function Home() {
  return (
    <main className={styles.main}>
      <Login forgotPass={""} signUp={""} />
      <div className={styles.divider}>
        <Divider />
      </div>
      <LoginButtonGroup />
    </main>
  );
}
