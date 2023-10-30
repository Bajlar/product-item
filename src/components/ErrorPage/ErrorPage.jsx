import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="container flex flex-col justify-center items-center h-screen">
      <h1 className="text-5xl text-gray-600 text-center">
        This is error Page....
      </h1>
      <div className="mt-5">
        <Link to="/">
          <button className="text-lg font-semibold bg-sky-500 hover:bg-sky-800 py-2 px-10 text-white">
            Back to Home Page
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
