import React from "react";
import styles from "./Components.module.css";
import Link from "next/link";
import Image from "next/image";
import { Button, TextField } from "@mui/material";

const Recover = () => {
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
      <span className={styles.Recover_SubTitle}>No worries, we&apos;ll send you reset instructions.</span>
      <form className={styles.Recover_Form} action="">
        <div>
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            fullWidth={true}
            type="email"
            required
          />
        </div>
        <Button variant="contained">SEND MAIL</Button>
      </form>
      <div className={styles.Recover_SignInContainer}>
        <Link href={"/"}>Back to sign in</Link>
      </div>
    </div>
  );
};

export default Recover;
