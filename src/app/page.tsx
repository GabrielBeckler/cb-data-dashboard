"use client";
import Dashboard from "./dashboard/dashboard";
import Head from "next/head";
import Header from "../components/Header/Header";
import SideMenu from "../components/SideMenu/SideMenu";
import Login from "../components/Login/Login";
import { useSession } from "next-auth/react";
import scss from "./Home.module.scss";

const Home: React.FC = () => {
    const { data: session } = useSession();
    return (
      <>
        <Head>
          <title>DataSoft -  Dashboard</title>
          <meta name="description" content="CB Data Dashboard" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={scss.main}>
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
  export default Home

