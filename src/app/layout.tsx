import type { Metadata } from "next";
import { Titillium_Web } from "next/font/google";
import "./globals.css";
import { AuthContextProvider } from "@/context/AuthContext";

const titi = Titillium_Web({
  subsets: ["latin"],
  weight: ["200", "300", "400", "600", "700", "900"],
});

export const metadata: Metadata = {
  title: "Ideario",
  description: "app para administrar",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <AuthContextProvider>
        <body className={titi.className}>
          {children}
        </body>
      </AuthContextProvider>
    </html>
  );
}
