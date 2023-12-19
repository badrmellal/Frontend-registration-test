import Link from "next/link";
import UsersPage from "./usersPage";
import React from "react";

const AllUsers = () => {
  return (
    <div className="p-4 sm:p-6 md:p-8">
      <h1 className="bg-white dark:bg-slate-900 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl text-2xl font-semibold italic text-center text-slate-900">
        Check out your colleagues
      </h1>
      <UsersPage />
      <div className="relative ml-4 mt-4 space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
        <Link
          href="/"
          className="block w-full sm:w-auto py-2 px-5 bg-blue-500 text-white font-semibold rounded-full shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
        >
          Go Home
        </Link>
        <Link
          href="/study"
          className="block w-full sm:w-auto py-2 px-5 bg-blue-500 text-white font-semibold rounded-full shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
        >
          Go Study
        </Link>
      </div>
    </div>
  );
};

export default AllUsers;
