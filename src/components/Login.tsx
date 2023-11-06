import React, { useContext, useId, useState } from "react";
import styles from "./Components.module.css";
import Image from "next/image";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import Link from "next/link";
import { AuthContext } from "@/context/AuthContext";

const Login: React.FC<{ forgotPass: string; signUp: string }> = ({
  forgotPass,
  signUp,
}) => {
  const [error, setError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const { signIn } = useContext(AuthContext);
  const $EMAIL = useId();
  const $PASSWORD = useId();

  const signInWithEmail = async () => {
    if (signIn) {
      let result = await signIn(
        (document.getElementById($EMAIL) as HTMLInputElement).value,
        (document.getElementById($PASSWORD) as HTMLInputElement).value
      );

      if (result instanceof Error) {
        setError(true);
        setErrorMessage(
          result.message.slice(0, result.message.indexOf("(auth/")) ||
            "Something went wrong. Try again in a few minutes."
        );
        (document.getElementById($EMAIL) as HTMLInputElement).value = "";
        (document.getElementById($PASSWORD) as HTMLInputElement).value = "";
      }
    }
  };

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
            id={$EMAIL}
            label="Email"
            variant="outlined"
            fullWidth={true}
            type="email"
            error={error}
            required
          />
        </div>
        <div className={styles.login_InputContainer}>
          <TextField
            id={$PASSWORD}
            label="Password"
            variant="outlined"
            fullWidth={true}
            type="password"
            error={error}
            required
          />
        </div>
        {error && (
          <span className={styles.login_errorSpan}>{errorMessage}</span>
        )}
        <Button onClick={() => signInWithEmail()} variant="contained">
          SIGN IN
        </Button>
      </form>
      <div className={styles.login_SignUpContainer}>
        <Link href={"/" + forgotPass}>Forgot password?</Link>
        <Link href={"/" + signUp}>Don&apos;t have an account? Sign Up</Link>
      </div>
    </div>
  );
};

export default Login;
