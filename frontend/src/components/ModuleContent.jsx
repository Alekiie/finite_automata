import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import AuthContext from "../context/AuthContext";

const ModuleContent = () => {
  const { id } = useParams();
  const { authState } = useContext(AuthContext);
  const [module, setModule] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchModuleContent = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/module/${id}`, {
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

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-semibold mb-6">{module.title}</h1>
      <p className="text-lg mb-4">{module.description}</p>
      <div className="content">{module.content}</div>
    </div>
  );
};

export default ModuleContent;
