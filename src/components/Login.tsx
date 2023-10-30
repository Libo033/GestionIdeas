import React from "react";
import styles from "./Components.module.css";
import Image from "next/image";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import Link from "next/link";

const Login: React.FC<{ forgotPass: string; signUp: string }> = ({
  forgotPass,
  signUp,
}) => {
  return (
    <div className={styles.login}>
      <div className={styles.login_ImgContainer}>
        <Image
          className={styles.login_Img}
          src={"/img/login.svg"}
          alt="login"
          width={90}
          height={90}
        />
      </div>
      <h1 className={styles.login_Title}>Sign in</h1>
      <form className={styles.login_Form}>
        <div className={styles.login_InputContainer}>
          <TextField
            label="Email"
            variant="outlined"
            fullWidth={true}
            type="email"
            required
          />
        </div>
        <div className={styles.login_InputContainer}>
          <TextField
            label="Password"
            variant="outlined"
            fullWidth={true}
            type="password"
            required
          />
        </div>
        <Button variant="contained">SIGN IN</Button>
      </form>
      <div className={styles.login_SignUpContainer}>
        <Link href={"/" + forgotPass}>Forgot password?</Link>
        <Link href={"/" + signUp}>Don&apos;t have an account? Sign Up</Link>
      </div>
    </div>
  );
};

export default Login;
