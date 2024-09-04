import React, { useEffect, useState, useContext } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import axios from "../configs/axios";
import AuthContext from "../context/AuthContext";

const ModuleContent = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const { authState } = useContext(AuthContext);
  const [module, setModule] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { modules, currentIndex } = location.state || {
    modules: [],
    currentIndex: 0,
  };

  useEffect(() => {
    const fetchModuleContent = async () => {
      try {
        const response = await axios.get(`/module/${id}`, {
          headers: {
            Authorization: `Bearer ${authState.user.accessToken}`,
          },
        });
        setModule(response.data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchModuleContent();
  }, [id, authState.user.accessToken]);

  const handleNavigation = (index) => {
    const newModule = modules[index];
    if (newModule) {
      navigate(`/module/${newModule._id}`, {
        state: { modules, currentIndex: index },
      });
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="container relative mx-auto p-6">
      <div className="w-5/6 flex absolute -top-52 left-0 justify-between mt-6">
        <button
          className="bg-blue-500 text-gray-800 px-4 py-2 rounded disabled:opacity-50"
          onClick={() => handleNavigation(currentIndex - 1)}
          disabled={currentIndex === 0}
        >
          Previous
        </button>
        <button
          className="bg-blue-500 text-gray-800 px-4 py-2 rounded disabled:opacity-50"
          onClick={() => handleNavigation(currentIndex + 1)}
          disabled={currentIndex === modules.length - 1}
        >
          Next
        </button>
      </div>
      <h1 className="text-3xl font-semibold mb-6">{module.title}</h1>
      <p className="text-lg mb-4">{module.description}</p>
      <div className="content">{module.content.title}</div>
    </div>
  );
};

export default ModuleContent;
