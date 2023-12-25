import React from "react";
import Image from "next/image";
import AvatarImg from "../assets/avatar-sample.svg";

const Messages: React.FC = () => {
  return (
    <div className="py-12 px-8 flex flex-col">
      <div className="flex gap-3 mb-6">
        <Image
          alt="avatar"
          src={AvatarImg}
          width={40}
          height={40}
          className="w-10 h-10 rounded-full object-cover"
        />
        <div className="bg-gray-200 p-3 rounded-2xl">
          <p className="text-sm text-gray-700">message</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-1">
          <p className="text-xs text-orange-500 font-medium">Public</p>
          <p className="text-xs text-gray-500">time</p>
        </div>
      </div>
    </div>
  );
};

export default Messages;
