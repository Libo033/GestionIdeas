"use client";
import styles from "./page.module.css";
import Login from "@/components/Login";
import { Divider } from "@mui/material";
import LoginButtonGroup from "@/components/LoginButtonGroup";
import { useRouter } from "next/navigation";
import { useContext, useEffect } from "react";
import { AuthContext } from "@/context/AuthContext";

export default function Home() {
  const router = useRouter();
  const { loaded, user } = useContext(AuthContext);

  useEffect(() => {
    if (user !== null && loaded) {
      router.push("/dashboard");
    }
  }, [loaded, user]);

  return (
    <main className={styles.main}>
      <Login forgotPass={"recover_password"} signUp={"create_account"} />
      <div className={styles.divider}>
        <Divider />
      </div>
      <LoginButtonGroup />
    </main>
  );
}
