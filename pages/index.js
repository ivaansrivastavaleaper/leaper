import Head from "next/head";
import { useEffect } from "react";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebaseConfig from "../firebaseConfig"; // Import Firebase config

export default function Home() {
  useEffect(() => {
    const app = initializeApp(firebaseConfig);
    getAnalytics(app);
  }, []);

  return (
    <>
      <Head>
        <title>Leaper App</title>
        <meta name="description" content="Welcome to Leaper App" />
      </Head>
      <main>
        <h1>Welcome to Leaper</h1>
        <p>Firebase is set up correctly!</p>
      </main>
    </>
  );
}
