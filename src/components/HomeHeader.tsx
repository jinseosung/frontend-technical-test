import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../assets/lbc-logo.webp";

const HomeHeader: React.FC = () => {
  return (
    <div className="w-full p-2 flex justify-between items-center border-b border-b-gray-300">
      <div className="w-1/3">
        <Image
          src={Logo}
          alt="Leboncoin Frontend Team"
          width={120}
          height={37.5}
          style={{ width: "auto", height: "auto" }}
        />
      </div>
      <h1 className="text-lg md:text-2xl font-bold truncate">
        My conversations
      </h1>
      <Link className="w-1/3 text-right" href="/">
        Home
      </Link>
    </div>
  );
};

export default HomeHeader;
