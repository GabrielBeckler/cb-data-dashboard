"use client";
import Dashboard from "./dashboard/dashboard";
import styles from "./styles/page.module.css";
import Head from "next/head";
import Header from "../components/Header/Header";
import SideMenu from "../components/SideMenu/SideMenu";
import Login from "../components/Login/Login";
import { useSession } from "next-auth/react";


export default function Home() {
  const { data: session } = useSession();
  return (
     <>
      <Head>
        <title>Data Dashboard</title>
        <meta name="description" content="CB Data Dashboard" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Header />
        {session && (
            <>
              <SideMenu />
              <Dashboard/>
            </>
          )
        }
        <Login />
      </main>
    </>
 
  );
}
