"use client";
import React, { useContext, useEffect } from "react";
import Recover from "@/components/account/Recover";
import { useRouter } from "next/navigation";
import { AuthContext } from "@/context/AuthContext";

const RecoverPassword = () => {
  const router = useRouter();
  const { loaded, user } = useContext(AuthContext);

  useEffect(() => {
    if (user !== null && loaded) {
      router.push("/home");
    }
  }, [loaded, user]);

  return (
    <div>
      <Recover />
    </div>
  );
};

export default RecoverPassword;
