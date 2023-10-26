import React from "react";
import styles from "./Components.module.css";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import Link from "next/link";
import Image from "next/image";

const Register = () => {
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
            id="outlined-basic"
            label="First Name"
            variant="outlined"
            fullWidth={true}
            type="text"
            required
          />
          <TextField
            id="outlined-basic"
            label="Last Name"
            variant="outlined"
            fullWidth={true}
            type="text"
            required
          />
        </div>
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
        <div>
          <TextField
            id="outlined-basic"
            label="Password"
            variant="outlined"
            fullWidth={true}
            type="password"
            required
          />
        </div>
        <Button variant="contained">SIGN UP</Button>
      </form>
      <div className={styles.register_SignInContainer}>
        <Link href={"/"}>Already have an account? Sign in</Link>
      </div>
    </div>
  );
};

export default Register;
