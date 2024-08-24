import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import AuthContext from "../context/AuthContext";

// import icons
import { IoClose, IoLogOutOutline } from "react-icons/io5";
import { RxAvatar } from "react-icons/rx";
import * as FaIcons  from "react-icons/fa";

const Sidebar = ({ isOpen, toggleSidebar }) => {

  const { logout, authState } = useContext(AuthContext);

  const location = useLocation();

  const links = [
    {
      id: 1,
      text: "Dashboard",
      path: "/dashboard",
      icon: <FaIcons.FaHome />,
      onClick: toggleSidebar,
    },
    {
      id: 2,
      text: "Profile",
      path: "/profile",
      icon: <FaIcons.FaUser />,
      onClick: toggleSidebar,
    },
    {
      id: 3,
      text: "Modules",
      path: "/modules",
      icon: <FaIcons.FaBook />,
      onClick: toggleSidebar,
    },
    {
      id: 4,
      text: "Instructors",
      path: "/instructors",
      icon: <FaIcons.FaHome />,
      onClick: toggleSidebar,
    },
  ];

  if(!authState.isAuthenticated){
    return null;
  }

  return (
    <div
      className={`absolute left-0 top-0 h-full bg-gray-900 shadow-md transition-all duration-300 ${
        isOpen ? "w-56" : "w-0"
      }`}
    >
      <div className="flex items-center justify-between py-4 px-4">
        <div className="font-bold text-2xl flex items-center text-white">
          {isOpen ? (
            <span className="text-3xl text-indigo-600 mr-1">
              <FaIcons.FaBook />
            </span>
          ) : (
            <span onClick={toggleSidebar} className="text-3xl cursor-pointer text-black">
              <FaIcons.FaBars />
            </span>
          )}
        </div>
        {isOpen && (
          <button
            onClick={toggleSidebar}
            className="text-3xl cursor-pointer ml-auto text-white"
          >
            <IoClose />
          </button>
        )}
      </div>
      <ul className={`pt-5 ${isOpen ? "block" : "hidden"}`}>
        {links.map((link) => (
          <li
            className={`text-xl my-7 px-5 ${
              location.pathname === link.path
                ? "bg-blue-600 px-2 py-1 m-2 rounded transition-all text-black"
                : ""
            }`}
            key={link.id}
          >
            <Link
              to={link.path}
              className="flex items-center gap-1 text-white hover:text-gray-400 duration-500"
              onClick={link.onClick}
            >
              {link.icon}
              <span className="ml-2">{link.text}</span>
            </Link>
          </li>
        ))}
      </ul>
      <section className={`absolute flex items-center justify-around bottom-4 left-4 w-5/6 rounded bg-blue-500 ${isOpen ? '' : "hidden"}`}>
        <button className="flex flex-col gap-2 items-center justify-center p-2 " onClick={logout}>
          <span>Logout</span>
          <IoLogOutOutline />
        </button>
        <span className="flex flex-col gap-2 items-center justify-center p-2 ">
          <RxAvatar />
          <p>{authState ? authState.user.firstName : ""}</p>
        </span>
      </section>
    </div>
  );
};

export default Sidebar;