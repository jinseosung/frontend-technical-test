import type { ReactElement } from "react";
import Head from "next/head";
import HomeHeader from "../components/HomeHeader";
import HomeConversationLists from "../components/HomeConversationLists";

const Home = (): ReactElement => {
  return (
    <div className="h-screen p-2 flex flex-col">
      <Head>
        <title>Frontend Technical test - Leboncoin</title>
        <meta
          name="description"
          content="Frontend exercise for developpers who want to join us on leboncoin.fr"
        ></meta>
      </Head>

      <main className="flex flex-col justify-center items-center">
        <HomeHeader />
        <HomeConversationLists />
      </main>
    </div>
  );
};

export default Home;
