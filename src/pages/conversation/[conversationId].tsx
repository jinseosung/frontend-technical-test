import React from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import ConversationHeader from "../../components/ConversationHeader";
import Messages from "../../components/Messages";
import { getLoggedUserId } from "../../utils/getLoggedUserId";
import { getConversationById } from "../../api/conversations";
import { getMessagesByConversationId } from "../../api/messages";
import { getAllUsers } from "../../api/users";
import { User } from "../../types/user";

export default function ConversationIdPage() {
  const userId = getLoggedUserId();
  const users = getAllUsers();
  const user = users?.find((user: User) => user.id === userId);

  const router = useRouter();
  const { conversationId } = router.query;

  const conversations = getConversationById(userId);
  const conversation = conversations?.find(
    (conversation) => conversation.id === Number(conversationId)
  );
  
  const conversationMessages = getMessagesByConversationId(
    Number(conversationId)
  );

  const recipientId: number =
    conversation?.senderId === userId
      ? conversation?.recipientId
      : conversation?.senderId;

  const recipient: User = users?.find((user) => user.id === recipientId);

  return (
    <>
      <Head>
        <title>{`${user.nickname}'s Messages Page - Leboncoin`}</title>
        <meta
          name="description"
          content={`${user.nickname}'s messages page on leboncoin.fr`}
        ></meta>
      </Head>

      <ConversationHeader
        recipientNickname={recipient.nickname}
        recipientAvatar={recipient.avatar}
        lastMessageTime={conversation?.lastMessageTimestamp}
      />
      <Messages recipient={recipient} conversationMessages={conversationMessages} />
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
