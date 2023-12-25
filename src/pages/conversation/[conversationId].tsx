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
      <div className="flex flex-col gap-2 p-4">
        <input
          className="p-2 border border-gray-300 rounded-md truncate"
          placeholder="Type your message here"
          type="text"
        />
        <select className="p-2 border border-gray-300 rounded-md">
          <option value="public">Public</option>
          <option value="private">Private</option>
        </select>
        <button
          className="bg-orange-500 text-white rounded-md p-2 w-full"
          type="button"
        >
          Send
        </button>
      </div>
    </>
  );
}
