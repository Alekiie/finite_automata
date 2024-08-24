import React, { useContext, useState } from "react";
import AuthContext from "../context/AuthContext";
import { Link } from "react-router-dom";

// import icons
import { FaBook, FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const Navbar = ({ toggleSidebar, isSidebarOpen }) => {
  const { authState, logout } = useContext(AuthContext);

  const handleClick = (action) => {
    if (action) action();
  };

  const links = authState.isAuthenticated
    ? [
        { name: "Dashboard", link: "/dashboard" },
        { name: "Logout", link: "/login", onClick: logout },
      ]
    : [
        { name: "Signup", link: "/" },
        { name: "Login", link: "/login" },
      ];

  return (
    <div className="shadow-md w-full fixed top-0 left-0 bg-white">
      <div className="md:flex items-center justify-between py-4 md:px-10 px-7">
        <div className="flex items-center">
          {authState.isAuthenticated && (
            <button onClick={toggleSidebar} className="text-3xl">
              {isSidebarOpen ? <IoClose /> : <FaBars />}
            </button>
          )}
          <div className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800 ml-4">
            <span className="text-3xl text-indigo-600 mr-1 pt-2">
              <FaBook />
            </span>
          </div>
        </div>

        <ul className="md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in">
          {links.map((link) => (
            <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7">
              {link.onClick ? (
                <button
                  onClick={() => handleClick(link.onClick)}
                  className="text-gray-800 hover:text-gray-400 duration-500"
                >
                  {link.name}
                </button>
              ) : (
                <Link
                  to={link.link}
                  onClick={() => handleClick()}
                  className="text-gray-800 hover:text-gray-400 duration-500"
                >
                  {link.name}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;