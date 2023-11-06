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
  signInWithEmailAndPassword,
} from "firebase/auth";
import React, { useEffect, useState, createContext } from "react";

const defaultValue: IAuthContext = {
  user: null,
  googleSignIn: null,
  facebookSignIn: null,
  logOut: null,
  loaded: false,
  signUp: null,
  signIn: null,
};

export const AuthContext: React.Context<IAuthContext> =
  createContext(defaultValue);

export const AuthContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [loaded, setLoaded] = useState<boolean>(false);
  const [user, setUser] = useState<User | null>(null);

  const googleSignIn = async (): Promise<void> => {
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

  const facebookSignIn = async (): Promise<void> => {
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

  const signIn = async (email: string, password: string): Promise<Error | undefined> => {
    try {
      await signInWithEmailAndPassword(auth, email, password);

      // TO DO - ADD POST `/api/account/sign_in`

      location.reload();
    } catch (error) {
      if (error instanceof Error) {
        return error;
      }
    }
  };

  const logOut = async (): Promise<void> => {
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
      value={{
        loaded,
        user,
        logOut,
        googleSignIn,
        facebookSignIn,
        signUp,
        signIn,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
