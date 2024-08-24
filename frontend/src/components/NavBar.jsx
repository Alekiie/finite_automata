import React, { useState, useContext } from "react";
import AuthContext from "../context/AuthContext";
import { Link } from "react-router-dom";

// Import icons
import { FaBook, FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const { authState } = useContext(AuthContext);
  const [menuOpen, setMenuOpen] = useState(false);

  if (authState.isAuthenticated) {
    // If the user is authenticated, don't render the Navbar
    return null;
  }

  // Links to display for non-authenticated users
  const links = [
    { name: "Signup", link: "/" },
    { name: "Login", link: "/login" },
  ];

  return (
    <div className="shadow-md w-full fixed top-0 left-0 bg-white z-50">
      <div className="md:flex items-center justify-between py-4 md:px-10 px-7">
        <div className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800">
          <span className="text-3xl text-indigo-600 mr-1 pt-2">
            <FaBook />
          </span>
        </div>

        {/* Toggle button for mobile menu */}
        <div
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <IoClose /> : <FaBars />}
        </div>

        <ul
          className={`md:flex md:items-center md:static absolute bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            menuOpen
              ? "top-16 opacity-100"
              : "top-[-490px] md:opacity-100 opacity-0"
          }`}
        >
          {links.map((link) => (
            <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7">
              <Link
                to={link.link}
                className="text-gray-800 hover:text-gray-400 duration-500"
                onClick={() => setMenuOpen(false)} // Close the menu after clicking a link
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
