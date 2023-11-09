"use client";
import { AuthContext } from "@/context/AuthContext";
import React, { useContext } from "react";

const Dashboard = () => {
  const { user } = useContext(AuthContext);

  return (
    <main>

    </main>
  );
};

export default Dashboard;
