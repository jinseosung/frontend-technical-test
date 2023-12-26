import type { ReactElement } from "react";
import { GetServerSideProps } from "next";
import Head from "next/head";
import HomeHeader from "../components/HomeHeader";
import HomeConversationLists from "../components/HomeConversationLists";
import { Conversation } from "../types/conversation";
import { getLoggedUserId } from "../utils/getLoggedUserId";
import { getConversationByUserId } from "../api/conversations";

interface HomeProps {
  userId: number;
  conversations: Conversation[];
}

const Home = ({ userId, conversations }: HomeProps): ReactElement => {
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

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  const userId = getLoggedUserId();
  const conversations = await getConversationByUserId(userId);

  return {
    props: {
      userId,
      conversations,
    },
  };
};

export default Home;
