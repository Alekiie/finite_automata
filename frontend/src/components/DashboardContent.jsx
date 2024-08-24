import React from "react";

const DashboardContent = () => {
  return (
    <div className="p-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded shadow">
          <div>Today's Money</div>
          <div className="text-2xl font-bold">$53k</div>
          <div className="text-green-500">+55% than last week</div>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <div>Today's Users</div>
          <div className="text-2xl font-bold">2,300</div>
          <div className="text-green-500">+3% than last month</div>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <div>New Clients</div>
          <div className="text-2xl font-bold">3,462</div>
          <div className="text-red-500">-2% than yesterday</div>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <div>Sales</div>
          <div className="text-2xl font-bold">$103,430</div>
          <div className="text-green-500">+5% than yesterday</div>
        </div>
      </div>
      <div className="mt-8 bg-white p-4 rounded shadow">
        <h2 className="text-lg font-bold">Projects</h2>
        <ul className="mt-4">
          <li className="flex justify-between py-2">
            <span>Material XD Version</span>
            <span>$14,000 - 60% Completed</span>
          </li>
          <li className="flex justify-between py-2">
            <span>Add Progress Track</span>
            <span>$3,000 - 10% Completed</span>
          </li>
          <li className="flex justify-between py-2">
            <span>Fix Platform Errors</span>
            <span>Not set - 100% Completed</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashboardContent;
