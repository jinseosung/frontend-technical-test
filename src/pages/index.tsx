import type { ReactElement } from "react";
import Head from "next/head";
import HomeHeader from "../components/HomeHeader";
import HomeConversationLists from "../components/HomeConversationLists";
import { getLoggedUserId } from "../utils/getLoggedUserId";
import { getConversationById } from "../api/conversations";

const Home = (): ReactElement => {
  const userId = getLoggedUserId();
  const conversations = getConversationById(userId);

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
        <HomeConversationLists userId={userId} conversations={conversations} />
      </main>
    </div>
  );
};

export default Home;
