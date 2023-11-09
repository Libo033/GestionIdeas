"use client";
import { AuthContext } from "@/context/AuthContext";
import Link from "next/link";
import React, { useContext } from "react";

const Notes = () => {
  const { user } = useContext(AuthContext);

  return (
    <main>
      <div className="Dashboard_Breadcrumbs">
        <span>{"/ "}</span>
        <Link href={"/home"}>Home</Link>
        <span>{" / "}</span>
        <span>Notes</span>
      </div>
    </main>
  );
};

export default Notes;
