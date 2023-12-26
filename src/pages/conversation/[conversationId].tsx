import React, { useState, useRef } from "react";
import Head from "next/head";
import ConversationHeader from "../../components/ConversationHeader";
import Messages from "../../components/Messages";
import { getLoggedUserId } from "../../utils/getLoggedUserId";
import { getConversationByUserId } from "../../api/conversations";
import {
  getMessagesByConversationId,
  addMessageInConversation,
} from "../../api/messages";
import { getAllUsers } from "../../api/users";
import { User } from "../../types/user";
import { v4 as uuidv4 } from "uuid";
import { Conversation } from "../../types/conversation";
import { Message } from "../../types/message";

interface ConversationIdPageProps {
  userId: number;
  user: User;
  token: string;
  conversationId: number;
  conversation: Conversation;
  conversationMessages: Message[];
  recipient: User;
}

export default function ConversationIdPage({
  userId,
  user,
  token,
  conversationId,
  conversation,
  conversationMessages,
  recipient,
}: ConversationIdPageProps) {
  const [isPrivate, setIsPrivate] = useState(false);

  const inputRef = useRef(null);
  const selectRef = useRef(null);

  const [allMessages, setAllMessages] = useState(conversationMessages);

  const handleMessageSubmit = () => {
    if (!inputRef.current.value) return;

    selectRef.current.value === "private"
      ? setIsPrivate(true)
      : setIsPrivate(false);
    const timestamp = Math.floor(Date.now() / 1000);
    const newMessageObject = {
      id: uuidv4(),
      conversationId: Number(conversationId),
      timestamp,
      authorId: userId,
      private: isPrivate,
      body: inputRef.current.value,
    };

    addMessageInConversation(newMessageObject, token);
    inputRef.current.value = "";
    setAllMessages([...allMessages, newMessageObject]);
  };
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
        lastMessageTime={
          conversationMessages.length > 0
            ? conversationMessages[conversationMessages.length - 1].timestamp
            : null
        }
      />
      <Messages recipient={recipient} conversationMessages={allMessages} />
      <div className="flex flex-col gap-2 p-4">
        <input
          ref={inputRef}
          className="p-2 border border-gray-300 rounded-md truncate"
          placeholder="Type your message here"
          type="text"
          onKeyUp={(e) => {
            e.key === "Enter" && handleMessageSubmit();
          }}
        />
        <select
          ref={selectRef}
          className="p-2 border border-gray-300 rounded-md"
        >
          <option value="public">Public</option>
          <option value="private">Private</option>
        </select>
        <button
          onClick={handleMessageSubmit}
          className="bg-orange-500 text-white rounded-md p-2 w-full"
          type="button"
        >
          Send
        </button>
      </div>
    </>
  );
}

export const getServerSideProps = async ({ params }) => {
  const userId = getLoggedUserId();
  const users = await getAllUsers();
  const user = users?.find((user: User) => user.id === userId);
  const token = user?.token;

  const conversationId = params.conversationId;

  const conversations = await getConversationByUserId(userId);
  const conversation = conversations?.find(
    (conversation) => conversation.id === Number(conversationId)
  );

  const conversationMessages = await getMessagesByConversationId(
    Number(conversationId)
  );

  const recipientId: number =
    conversation?.senderId === userId
      ? conversation?.recipientId
      : conversation?.senderId;

  const recipient: User = users?.find((user: User) => user.id === recipientId);

  return {
    props: {
      userId,
      user,
      token,
      conversationId,
      conversation,
      conversationMessages,
      recipient,
    },
  };
};
