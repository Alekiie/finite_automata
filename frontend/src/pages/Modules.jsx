import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import AuthContext from "../context/AuthContext";

export function Modules() {
  const { authState } = useContext(AuthContext);
  const navigate = useNavigate();

  const [modules, setModules] = useState([]);  // Initialize as an array
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchModules = async () => {
      setLoading(true);
      try {
        const response = await axios.get("http://localhost:3000/modules", {
          headers: {
            Authorization: `Bearer ${authState.user.accessToken}`,
          },
          params: {
            userId: authState.user.id,
          }
        });
        
        setModules(response.data.availableModules);
        
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchModules();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <section className="container mx-auto p-6">
      <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
        <div className="p-6 w-full flex items-center justify-around bg-green-300">
          <p>These are all the available modules</p>
          <button
            onClick={() => {
              navigate("/new_module");
            }}
            className={`${
              authState.user.role.toLowerCase() === "student"
                ? "hidden"
                : "flex gap-2 items-center px-2 py-1 bg-blue-700 rounded shadow text-white"
            } `}
          >
            <span>Create New</span>
            <FaPlus />
          </button>
        </div>
        <div className="w-full overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                <th className="px-4 py-3">Author</th>
                <th className="px-4 py-3">Title</th>
                <th className="px-4 py-3">Description</th>
                <th className="px-4 py-3">Date</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {
                modules.length > 0 ? (
                  modules.map((module, index) => (
                    <tr key={index} className="text-gray-700">
                      <td className="px-4 py-3 border">
                        <div className="flex items-center text-sm">
                          <div className="relative w-8 h-8 mr-3 rounded-full md:block">
                            <img className="object-cover w-full h-full rounded-full" src="https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="Module" loading="lazy"/>
                            <div className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                          </div>
                          <div>
                            <p className="font-semibold text-black">{module.author}</p>
                            <p className="text-xs text-gray-600">Developer</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-ms font-semibold border">{module.title}</td>
                      <td className="px-4 py-3 text-xs border">
                        <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm">
                          {module.description}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-sm border">{new Date(module.createdAt).toLocaleDateString()}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="4" className="text-center py-4">No modules available</td>
                  </tr>
                )
              }
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
