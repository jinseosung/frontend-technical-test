import React from "react";
import Link from "next/link";

const Error503: React.FC = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h1 className="text-2xl mb-2">503 - Service Unavailable</h1>
      <p className="mb-4">{`We're sorry, but the service is temporarily unavailable. Please try again later.`}</p>
      <button className="hover:shadow-md bg-orange-500 px-4 py-2 rounded-md text-white mt-4">
        <Link href="/">Go back to the homepage</Link>
      </button>
    </div>
  );
};

export default Error503;
