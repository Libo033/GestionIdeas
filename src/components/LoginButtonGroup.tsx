"use client";
import React, { useContext } from "react";
import styles from "./Components.module.css";
import Image from "next/image";
import { AuthContext } from "@/context/AuthContext";

const LoginButtonGroup = () => {
  const { googleSignIn, facebookSignIn } = useContext(AuthContext);

  return (
    <div className={styles.LoginButtonGroup}>
      {googleSignIn && (
        <button onClick={() => googleSignIn()}>
          <Image
            className={styles.LoginButtonGroup_Logo}
            src={"/img/google.svg"}
            alt="google"
            width={45}
            height={45}
          />
          GOOGLE
        </button>
      )}
      {facebookSignIn && (
        <button onClick={() => facebookSignIn()}>
          <Image
            className={styles.LoginButtonGroup_Logo}
            src={"/img/facebook.svg"}
            alt="facebook"
            width={45}
            height={45}
          />
          FACEBOOK
        </button>
      )}
    </div>
  );
};

export default LoginButtonGroup;
