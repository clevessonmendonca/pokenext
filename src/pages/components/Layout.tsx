import { ReactNode } from "react";

import Footer from "./Footer";
import Navbar from "./Navbar";

import Head from "next/head";

interface LayoutProps {
  children: ReactNode;
}

import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>PokeNext</title>
        <link rel="shortcut icon" href="/images/favicon.ico" />
      </Head>
      <Navbar />
      <main className="main-container ">{children}</main>
      <Footer />
    </>
  );
};
