"use client";
import React, { useContext, useEffect } from "react";
import Recover from "@/components/account/Recover";
import { useRouter } from "next/navigation";
import { AuthContext } from "@/context/AuthContext";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

const RecoverPassword = () => {
  const router: AppRouterInstance = useRouter();
  const { loaded, user } = useContext(AuthContext);

  useEffect(() => {
    if (user !== null && loaded) {
      router.push("/home");
    }
  }, [loaded, user, router]);

  return (
    <div>
      <Recover />
    </div>
  );
};

export default RecoverPassword;
