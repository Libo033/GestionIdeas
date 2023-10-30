"use client";
import { AuthContext } from "@/context/AuthContext";
import React, { useContext } from "react";

const Dashboard = () => {
  const { logOut, user } = useContext(AuthContext);

  return (
    <main>
      <h1>Dashboard</h1>
      {user && (
        <>
          <span>Bienvenido {user.displayName}</span>
          <div>
            {logOut && <button onClick={() => logOut()}>Log Out</button>}
          </div>
        </>
      )}
    </main>
  );
};

export default Dashboard;
