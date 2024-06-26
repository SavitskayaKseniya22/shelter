import React from "react";
import type { Metadata } from "next";
import localFont from "next/font/local";
import Footer from "./components/layout/Footer/Footer";
import Header from "./components/layout/Header/Header";
import "./globals.scss";

const Arial = localFont({
  src: "./../../public/fonts/Arial.ttf",
  display: "swap",
});

const Georgia = localFont({
  src: "./../../public/fonts/Georgia.ttf",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Shelter",
  description: "Website with an information about pets",
};

export default function RootLayout({ children, modal }: { children: React.ReactNode; modal: React.ReactNode }) {
  return (
    <html lang="en" className={`${Arial.className} ${Georgia.className}`}>
      <head>
        <link rel="icon" href="/favicon.png" />
      </head>
      <body>
        <Header />
        {children}
        {modal}
        <Footer />
      </body>
    </html>
  );
}
