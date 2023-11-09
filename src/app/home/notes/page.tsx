"use client";
import { AuthContext } from "@/context/AuthContext";
import React, { useContext } from "react";

const Notes = () => {
  const { user } = useContext(AuthContext);

  return (
    <main>
      Notes
    </main>
  );
};

export default Notes;
