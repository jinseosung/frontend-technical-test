import React from "react";
import Link from "next/link";
import Image from "next/image";
import LeftChevron from "../assets/left-chevron.svg";
import { getFormattedTime } from "../utils/getFormattedTimestamp";

interface ConversationHeaderProps {
  recipientNickname: string;
  recipientAvatar: string;
  lastMessageTime: number;
}

const ConversationHeader: React.FC<ConversationHeaderProps> = ({
  recipientNickname,
  recipientAvatar,
  lastMessageTime,
}) => {
  const formattedLastMessageTime = getFormattedTime(lastMessageTime);

  return (
    <div className="w-full p-2 flex justify-between items-center border-b border-b-gray-300">
      <div className="w-1/3">
        <Link href="/">
          <Image
            src={LeftChevron}
            alt="Left chevron"
            className="cursor-pointer w-8"
          />
        </Link>
      </div>
      <div className="flex gap-3 items-center">
        <Image
          src={recipientAvatar}
          alt={`${recipientNickname}'s avatar`}
          width={40}
          height={40}
          className="w-10 h-10 object-cover"
        />
        <h1 className="text-lg md:text-2xl font-bold truncate">
          {recipientNickname}
        </h1>
      </div>
      <div className="w-1/3 text-right text-sm truncate">
        <p>Last message at {formattedLastMessageTime}</p>
      </div>
    </div>
  );
};

export default ConversationHeader;
