"use client";
import { AuthContext } from "@/context/AuthContext";
import React, { useContext } from "react";

const Kanban = () => {
  const { user } = useContext(AuthContext);

  return (
    <main>
      Kanban
    </main>
  );
};

export default Kanban;
