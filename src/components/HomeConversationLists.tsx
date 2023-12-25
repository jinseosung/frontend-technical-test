import React from "react";
import Link from "next/link";
import Image from "next/image";
import AvatarImg from "../assets/avatar-sample.svg";

const HomeConversationLists: React.FC = () => {
  return (
    <div className="p-12">
      <ul className="flex flex-col gap-4">
        <li className="hover:shadow-md cursor-pointer min-w-72 px-6 py-4 width border rounded-lg border-solid border-gray-400">
          <Link className="flex gap-4" href={`#`}>
            <Image
              src={AvatarImg}
              width={80}
              height={80}
              className="rounded-full object-cover"
              alt="Avatar"
            />
            <div className="flex flex-col items-start justify-center">
              <h1 className="font-medium">name</h1>
              <p className="text-sm text-gray-700">date</p>
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default HomeConversationLists;
