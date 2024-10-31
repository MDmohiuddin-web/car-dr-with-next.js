"use client";
import Link from "next/link";
import React from "react";

const error = () => {
  return (
    <div className="grid h-screen place-content-center bg-white px-4">
      <div className="text-center">
        <h1 className="text-9xl font-black text-gray-200">404</h1>

        <p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Uh-oh!
        </p>

        <p className="mt-4 text-gray-500">We cant find that page.</p>

        <Link
          href="\"
          className="bg-red-500 hover:bg-black text-white  btn border-none  "
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default error;
