import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import DashboardContent from "../components/DashboardContent";

export const Dashboard = ({sidebarOpen}) => {
  

  return (
    <div className="flex">
      <div
        className={`flex-1 transition-all duration-300 ${
          sidebarOpen ? "ml-64" : "ml-20"
        }`}
      >
        <Header />
        <DashboardContent />
      </div>
    </div>
  );
};
