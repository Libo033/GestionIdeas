"use client";
import React, { useContext, useId, useState } from "react";
import styles from "./Components.module.css";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import { AuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

const Register: React.FC<{ signIn: string }> = ({ signIn }) => {
  const [error, setError] = useState<boolean>(false);
  const { signUp } = useContext(AuthContext);
  const router = useRouter();
  const $NAME = useId();
  const $LAST_NAME = useId();
  const $EMAIL = useId();
  const $PASSWORD = useId();

  const createNewUser = async () => {
    if (signUp) {
      const res: boolean | Error = await signUp(
        (document.getElementById($EMAIL) as HTMLInputElement).value,
        (document.getElementById($PASSWORD) as HTMLInputElement).value
      );

      if (!(res instanceof Error)) {
        router.push("/");
      }

      setError(true);
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
      <h1 className={styles.register_Title}>Registrarse</h1>
      <form className={styles.register_Form} action="">
        <div className={styles.register_InputDoubleContainer}>
          <TextField
            id={$NAME}
            label="Nombre"
            variant="outlined"
            fullWidth={true}
            type="text"
            error={error}
            required
          />
          <TextField
            id={$LAST_NAME}
            label="Apellido"
            variant="outlined"
            fullWidth={true}
            type="text"
            error={error}
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
            error={error}
            required
          />
        </div>
        <div>
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
        <Button onClick={() => createNewUser()} variant="contained">
          REGISTRARSE
        </Button>
      </form>
      <div className={styles.register_SignInContainer}>
        <Link href={"/" + signIn}>Ya tenes cuenta? inicia sesion</Link>
      </div>
    </div>
  );
};

export default Register;
