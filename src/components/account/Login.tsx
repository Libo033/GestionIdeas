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

  const signInWithEmail = async (): Promise<void> => {
    if (signIn) {
      let result = await signIn(
        (document.getElementById($EMAIL) as HTMLInputElement).value,
        (document.getElementById($PASSWORD) as HTMLInputElement).value
      );

      if (result instanceof Error) {
        setError(true);
        setErrorMessage("Something went wrong. Try again.");
        (document.getElementById($EMAIL) as HTMLInputElement).value = "";
        (document.getElementById($PASSWORD) as HTMLInputElement).value = "";
      } else {
        location.reload();
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
      <h1 className={styles.login_Title}>Iniciar Sesion</h1>
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
            label="Contraseña"
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
          Iniciar Sesion
        </Button>
      </form>
      <div className={styles.login_SignUpContainer}>
        <Link href={"/" + forgotPass}>Olvidaste tu constraseña?</Link>
        <Link href={"/" + signUp}>No tenes una cuenta? Registrate!</Link>
      </div>
    </div>
  );
};

export default Login;
