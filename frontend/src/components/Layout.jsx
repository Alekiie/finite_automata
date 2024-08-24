import React, { useState } from "react";
import Navbar from "./NavBar";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex">
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div
        className={`flex-1 transition-all duration-300 ${
          isSidebarOpen ? "ml-64" : "ml-16"
        }`}
      >
        {/* <Navbar toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} /> */}
        <div className="pt-16">{children}</div>
      </div>
    </div>
  );
};

export default Layout;