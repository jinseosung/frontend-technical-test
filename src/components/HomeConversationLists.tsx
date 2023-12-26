import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Conversation } from "../types/conversation";
import { getFormattedDate } from "../utils/getFormattedTimestamp";

interface HomeConversationListsProps {
  userId: number;
  conversations: Conversation[];
}

const HomeConversationLists: React.FC<HomeConversationListsProps> = ({
  userId,
  conversations,
}) => {
  const setUserByConversation = (conversation: Conversation) => {
    return conversation.senderId === userId
      ? {
          nickname: conversation.recipientNickname,
          avatar: conversation.recipientAvatar,
        }
      : {
          nickname: conversation.senderNickname,
          avatar: conversation.senderAvatar,
        };
  };

  const filteredConversationByTimestamp = (conversations: Conversation[]) =>
    conversations.sort(
      (a, b) => b.lastMessageTimestamp - a.lastMessageTimestamp
    );

  return (
    <div className="p-12">
      <ul className="flex flex-col gap-4">
        {filteredConversationByTimestamp(conversations).map((conversation) => (
          <li
            key={conversation.id}
            className="hover:shadow-md cursor-pointer min-w-72 px-6 py-4 width border rounded-lg border-solid border-gray-400"
          >
            <Link
              className="flex gap-4"
              href={`/conversation/${conversation.id}`}
            >
              <Image
                src={setUserByConversation(conversation).avatar}
                width={80}
                height={80}
                className="rounded-full object-cover"
                alt={`${setUserByConversation(conversation).nickname}'s avatar`}
              />
              <div className="flex flex-col items-start justify-center">
                <h1 className="font-medium">
                  {setUserByConversation(conversation).nickname}
                </h1>
                <p className="text-sm text-gray-700" suppressHydrationWarning>
                  {`${getFormattedDate(conversation.lastMessageTimestamp)}.`}
                </p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomeConversationLists;
