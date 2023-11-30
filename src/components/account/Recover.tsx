"use client";
import React, { FormEvent, useContext, useId, useState } from "react";
import styles from "./Components.module.css";
import Link from "next/link";
import Image from "next/image";
import { Button, TextField } from "@mui/material";
import { AuthContext } from "@/context/AuthContext";

const Recover = () => {
  const { recoverPassword } = useContext(AuthContext);
  const [emailSent, setEmailSent] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const $EMAIL = useId();

  const recoverMyPassword = async (e: FormEvent) => {
    e.preventDefault();

    if (recoverPassword) {
      let res = await recoverPassword(
        (document.getElementById($EMAIL) as HTMLInputElement).value
      );

      if (res instanceof Error) {
        setError(true);
      } else {
        setEmailSent(true);
      }
    }
  };

  return (
    <div className={styles.Recover}>
      <div className={styles.Recover_ImgContainer}>
        <Image
          className={styles.Recover_Img}
          src={"/img/login.svg"}
          alt="login"
          width={90}
          height={90}
        />
      </div>
      <h1 className={styles.Recover_Title}>Forgot password?</h1>
      <span className={styles.Recover_SubTitle}>
        No worries, we&apos;ll send you reset instructions.
      </span>
      {emailSent ? (
        <div className={styles.Recover_Sent}>
          <Image src={"/img/check.png"} alt="check" width={78} height={78} />
          <p>Email sent successfull!</p>
        </div>
      ) : (
        <form
          className={styles.Recover_Form}
          onSubmit={(e: FormEvent) => recoverMyPassword(e)}
        >
          <div>
            <TextField
              id={$EMAIL}
              label="Email"
              variant="outlined"
              fullWidth={true}
              type="email"
              error={error}
              required
            />
          </div>
          <Button type="submit" variant="contained">
            SEND MAIL
          </Button>
        </form>
      )}
      <div className={styles.Recover_SignInContainer}>
        <Link href={"/"}>Back to sign in</Link>
      </div>
    </div>
  );
};

export default Recover;
