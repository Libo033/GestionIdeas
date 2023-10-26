import React from "react";
import styles from "./Components.module.css";
import Image from "next/image";

const LoginButtonGroup = () => {
  return (
    <div className={styles.LoginButtonGroup}>
      <button>
        <Image
          className={styles.LoginButtonGroup_Logo}
          src={"/img/google.svg"}
          alt="google"
          width={45}
          height={45}
        />
        GOOGLE
      </button>
      <button>
        <Image
          className={styles.LoginButtonGroup_Logo}
          src={"/img/facebook.svg"}
          alt="facebook"
          width={45}
          height={45}
        />
        FACEBOOK
      </button>
    </div>
  );
};

export default LoginButtonGroup;
