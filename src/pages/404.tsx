import React from "react";
import Link from "next/link";

const Error404: React.FC = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h1 className="text-2xl mb-2">404 - Page Not Found</h1>
      <p className="mb-4">{`Sorry, the page you're looking for doesn't exist.`}</p>
      <button className="hover:shadow-md bg-orange-500 px-4 py-2 rounded-md text-white mt-4">
        <Link href="/">Go back to the homepage</Link>
      </button>
    </div>
  );
};

export default Error404;
