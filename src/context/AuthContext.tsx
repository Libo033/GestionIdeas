"use client";
import { auth } from "@/libs/firebase";
import { IAuthContext } from "@/libs/interfaces";
import {
  User,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  FacebookAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import React, { useEffect, useState, createContext } from "react";

const defaultValue: IAuthContext = {
  user: null,
  googleSignIn: null,
  facebookSignIn: null,
  logOut: null,
  loaded: false,
  signUp: null
};

export const AuthContext: React.Context<IAuthContext> =
  createContext(defaultValue);

export const AuthContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [loaded, setLoaded] = useState<boolean>(false);
  const [user, setUser] = useState<User | null>(null);

  const googleSignIn = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const googleLogIn = await signInWithPopup(auth, provider);

      if (googleLogIn) {
        await fetch(`/api/account/sign_in`, {
          method: "POST",
          body: JSON.stringify({ uid: googleLogIn.user.uid }),
          headers: {
            "Content-Type": "application/json",
          },
        });
      }

      location.reload();
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
      }
    }
  };

  const facebookSignIn = async () => {
    try {
      const provider = new FacebookAuthProvider();
      const facebookLogIn = await signInWithPopup(auth, provider);

      if (facebookLogIn) {
        await fetch(`/api/account/sign_in`, {
          method: "POST",
          body: JSON.stringify({ uid: facebookLogIn.user.uid }),
          headers: {
            "Content-Type": "application/json",
          },
        });
      }

      location.reload();
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
      }
    }
  };

  const signUp = async (email: string, password: string): Promise<boolean> => {
    try {
      const newUser = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      console.log(newUser);

      if (newUser) {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
      }
      return false;
    }
  };

  const logOut = async () => {
    signOut(auth);

    await fetch(`/api/account/log_out`, { method: "DELETE" });

    location.reload();
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser !== null) {
        setUser(currentUser);
      }
      setLoaded(true);
    });

    return () => {
      unsubscribe();
    };
  }, [user]);

  return (
    <AuthContext.Provider
      value={{ loaded, user, logOut, googleSignIn, facebookSignIn, signUp }}
    >
      {children}
    </AuthContext.Provider>
  );
};
