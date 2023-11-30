"use client";
import React, { useContext, useEffect } from "react";
import Register from "@/components/account/Register";
import { useRouter } from "next/navigation";
import { AuthContext } from "@/context/AuthContext";

const CreateAccount = () => {
  const router = useRouter();
  const { loaded, user } = useContext(AuthContext);

  useEffect(() => {
    if (user !== null && loaded) {
      router.push("/home");
    }
  }, [loaded, user]);

  return (
    <div>
      <Register signIn={""} />
    </div>
  );
};

export default CreateAccount;
