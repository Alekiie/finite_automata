import React, { useContext } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { GrCheckmark } from "react-icons/gr";
import AuthContext from "../context/AuthContext";

const ModuleModal = ({ isOpen, onClose, module, onEnroll }) => {
  const { authState } = useContext(AuthContext);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
      <div className="bg-white rounded-lg shadow-lg z-50 max-w-lg w-full p-6">
        <h2 className="text-2xl text-center font-semibold mb-4">
          {module.title}
        </h2>
        <p className="text-xl text-center text-gray-700 mb-4">
          {module.description}
        </p>
        <div className="flex justify-between items-center mt-4">
          {authState.user.role.toLowerCase() === "student" && (
            <button
              onClick={onEnroll}
              className="px-2 py-1 flex gap-2 items-center bg-green-400 shadow rounded text-gray-600 hover:text-gray-800"
            >
              <span>Enroll</span>
              <GrCheckmark />
            </button>
          )}
          <button
            onClick={onClose}
            className="px-2 py-1 flex gap-2 items-center bg-red-300 shadow rounded text-gray-600 hover:text-gray-800"
          >
            <span>Close</span>
            <IoCloseSharp />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModuleModal;
