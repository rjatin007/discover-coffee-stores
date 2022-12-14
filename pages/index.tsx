import type { NextPage } from "next";
import Head from "next/head";

import Banner from "../components/Banner/Banner";
const Home: NextPage = () => {
  return (
    <div className="bg-[url(/static/background-img.png)] bg-no-repeat bg-center bg-cover bg-[#373b64] min-h-screen">
      <Head>
        <title>Coffee Connoisseur</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Banner onClick={() => {}} />
      <footer className=""></footer>
    </div>
  );
};

export default Home;
