import React from "react";
import { Link } from "react-router-dom";

// import icons
import { IoClose } from "react-icons/io5";
import { FaHome, FaBars, FaUser, FaTable, FaBell } from "react-icons/fa";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div
      className={`fixed left-0 top-0 h-full bg-white shadow-md transition-all duration-300 ${
        isOpen ? "w-64" : "w-16"
      }`}
    >
      <div className="flex items-center justify-between bg-white py-4 px-4">
        <div className="font-bold text-2xl flex items-center text-gray-800">
          {isOpen ? (
            <span className="text-3xl text-indigo-600 mr-1">
              <FaHome />
            </span>
          ) : (
            <span onClick={toggleSidebar} className="text-3xl cursor-pointer">
              <FaBars />
            </span>
          )}
        </div>
        {isOpen && (
          <button
            onClick={toggleSidebar}
            className="text-3xl cursor-pointer ml-auto"
          >
            <IoClose />
          </button>
        )}
      </div>
      <ul className={`pt-5 ${isOpen ? "block" : "hidden"}`}>
        <li className="text-xl my-7 px-5">
          <Link
            to="/dashboard"
            className="text-gray-800 hover:text-gray-400 duration-500"
          >
            Dashboard
          </Link>
        </li>
        <li className="text-xl my-7 px-5">
          <Link
            to="/profile"
            className="text-gray-800 hover:text-gray-400 duration-500"
          >
            Profile
          </Link>
        </li>
        <li className="text-xl my-7 px-5">
          <Link
            to="/tables"
            className="text-gray-800 hover:text-gray-400 duration-500"
          >
            Tables
          </Link>
        </li>
        <li className="text-xl my-7 px-5">
          <Link
            to="/notifications"
            className="text-gray-800 hover:text-gray-400 duration-500"
          >
            Notifications
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;