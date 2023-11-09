"use client";
import { AuthContext } from "@/context/AuthContext";
import Link from "next/link";
import React, { useContext } from "react";

const Dashboard = () => {
  const { user } = useContext(AuthContext);

  return (
    <main>
      <div className="Dashboard_Breadcrumbs">
        <span>{"/ "}</span>
        <Link href={"/home"}>Home</Link>
        <span>{" / "}</span>
        <span>Dashboard</span>
      </div>
      Dashboard
    </main>
  );
};

export default Dashboard;
