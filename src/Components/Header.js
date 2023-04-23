import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <>
      <header className="text-gray-400 bg-gray-900 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl">Pentagon</span>
          </a>
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
            <Link to="/" className="mr-5 hover:text-white">
              Home
            </Link>
            <Link to="/about" className="mr-5 hover:text-white">
              About us
            </Link>
            <Link to="/Register" className="mr-5 hover:text-white">
              Register
            </Link>
            <Link to="/contact" className="mr-5 hover:text-white">
              Contact{" "}
            </Link>
          </nav>
          <div className="relative">
            <button
              className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              Login
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4 h-4 ml-1"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button>
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-xl z-10">
                <Link
                  to="/Admin_login"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Admin
                </Link>
                <Link
                  to="/success"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Faculty
                </Link>
                <Link
                  to="/Student_login"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Student
                </Link>
              </div>
            )}
          </div>
        </div>
      </header>
    </>
  );
};
