import React, { useState } from "react";
import Header from "../components/Header";
import DashboardContent from "../components/DashboardContent";

export const Dashboard = () => {
  

  return (
    <div className="flex">
      <div>
        <Header />
        <DashboardContent />
      </div>
    </div>
  );
};
