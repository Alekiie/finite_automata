import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between items-center p-4 bg-white shadow">
      <div>
        <h1 className="text-xl font-bold">Dashboard</h1>
        <span className="text-gray-600">Home</span>
      </div>
      <div className="flex items-center">
        <input
          type="text"
          placeholder="Type here"
          className="p-2 rounded border"
        />
        <button className="ml-4">Sign In</button>
        <button className="ml-2">🔔</button>
      </div>
    </div>
  );
};

export default Header;