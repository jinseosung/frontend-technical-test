import React from "react";
import { useRouter } from "next/router";
import { useState, useRef } from "react";
import Head from "next/head";
import ConversationHeader from "../../components/ConversationHeader";
import Messages from "../../components/Messages";
import { getLoggedUserId } from "../../utils/getLoggedUserId";
import { getConversationById } from "../../api/conversations";
import {
  getMessagesByConversationId,
  addMessageInConversation,
} from "../../api/messages";
import { getAllUsers } from "../../api/users";
import { User } from "../../types/user";
import { v4 as uuidv4 } from "uuid";

export default function ConversationIdPage() {
  const [isPrivate, setIsPrivate] = useState(false);

  const inputRef = useRef(null);
  const selectRef = useRef(null);

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
  const [allMessages, setAllMessages] = useState(conversationMessages);

  const recipientId: number =
    conversation?.senderId === userId
      ? conversation?.recipientId
      : conversation?.senderId;

  const recipient: User = users?.find((user: User) => user.id === recipientId);

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

    addMessageInConversation(newMessageObject);
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
        lastMessageTime={conversation?.lastMessageTimestamp}
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
