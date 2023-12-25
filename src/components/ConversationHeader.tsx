import React from "react";
import Link from "next/link";
import Image from "next/image";
import LeftChevron from "../assets/left-chevron.svg";
import AvatarImg from "../assets/avatar-sample.svg";

const ConversationHeader: React.FC = () => {
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
          src={AvatarImg}
          alt="Avatar"
          width={40}
          height={40}
          className="rounded-full object-cover"
        />
        <h1 className="text-lg md:text-2xl font-bold truncate">User</h1>
      </div>
      <div className="w-1/3 text-right text-sm truncate">
        Last message today at Date
      </div>
    </div>
  );
};

export default ConversationHeader;
