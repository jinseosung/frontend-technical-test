import React from "react";
import Head from "next/head";
import ConversationHeader from "../../components/ConversationHeader";
import Messages from "../../components/Messages";

export default function conversationId() {
  return (
    <>
      <Head>
        <title>User Messages Page - Leboncoin</title>
        <meta
          name="description"
          content="User messages page on leboncoin.fr"
        ></meta>
      </Head>

      <ConversationHeader />
      <Messages />
    </>
  );
}
