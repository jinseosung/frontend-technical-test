import React from "react";
import Image from "next/image";
import { User } from "../types/user";
import { Message } from "../types/message";
import { getFormattedTime } from "../utils/getFormattedTimestamp";

interface MessagesProps {
  recipient: User;
  conversationMessages: Message[];
}

const Messages: React.FC<MessagesProps> = ({
  recipient,
  conversationMessages,
}) => {
  return (
    <div className="py-12 px-8 flex flex-col">
      {conversationMessages.map((message) => (
        <div
          key={message.id}
          className={`flex gap-3 mb-6 ${
            recipient.id !== message.authorId
              ? "self-end flex-row-reverse"
              : null
          }`}
        >
          {recipient.id === message.authorId && (
            <Image
              alt="avatar"
              src={recipient.avatar}
              width={40}
              height={40}
              className="w-10 h-10 rounded-full object-cover"
            />
          )}
          <div className="bg-gray-200 p-3 rounded-2xl">
            <p className="text-sm text-gray-700">{message.body}</p>
          </div>
          <div
            className={`flex flex-col justify-center gap-1 ${
              recipient.id === message.authorId ? "items-start" : "items-end"
            }`}
          >
            <p className="text-xs text-orange-500 font-medium">
              {!message.private ? "Public" : "Private"}
            </p>
            <p className="text-xs text-gray-500">
              {getFormattedTime(message.timestamp)}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Messages;
