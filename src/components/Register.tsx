"use client";
import React, { useContext, useId } from "react";
import styles from "./Components.module.css";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import { AuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

const Register: React.FC<{ signIn: string }> = ({ signIn }) => {
  const { signUp } = useContext(AuthContext);
  const router = useRouter();
  const $NAME = useId();
  const $LAST_NAME = useId();
  const $EMAIL = useId();
  const $PASSWORD = useId();

  const createNewUser = () => {
    if (signUp) {
      const res: boolean = signUp(
        (document.getElementById($EMAIL) as HTMLInputElement).value,
        (document.getElementById($PASSWORD) as HTMLInputElement).value
      );

      if (res) {
        router.push("/");
      }
    }
  };

  return (
    <div className={styles.register}>
      <div className={styles.register_ImgContainer}>
        <Image
          className={styles.register_Img}
          src={"/img/login.svg"}
          alt="login"
          width={90}
          height={90}
        />
      </div>
      <h1 className={styles.register_Title}>Sign up</h1>
      <form className={styles.register_Form} action="">
        <div className={styles.register_InputDoubleContainer}>
          <TextField
            id={$NAME}
            label="First Name"
            variant="outlined"
            fullWidth={true}
            type="text"
            required
          />
          <TextField
            id={$LAST_NAME}
            label="Last Name"
            variant="outlined"
            fullWidth={true}
            type="text"
            required
          />
        </div>
        <div>
          <TextField
            id={$EMAIL}
            label="Email"
            variant="outlined"
            fullWidth={true}
            type="email"
            required
          />
        </div>
        <div>
          <TextField
            id={$PASSWORD}
            label="Password"
            variant="outlined"
            fullWidth={true}
            type="password"
            required
          />
        </div>
        <Button onClick={() => createNewUser()} variant="contained">
          SIGN UP
        </Button>
      </form>
      <div className={styles.register_SignInContainer}>
        <Link href={"/" + signIn}>Already have an account? Sign in</Link>
      </div>
    </div>
  );
};

export default Register;
