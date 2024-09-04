import React, {useState, useEffect, useContext} from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from '../configs/axios';

import AuthContext from '../context/AuthContext';

export function Learning() {
    const { authState } = useContext(AuthContext);
    const [modules, setModules] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(()=>{
        const getAllModules = async () => {
          setLoading(true);
          try {
            const response = await axios.get("/modules", {
              headers: {
                Authorization: `Bearer ${authState.user.authToken}`,
              },
              params: {
                userId: authState.user.id,
              },
            });

            setModules(response.data.availableModules);
            setLoading(false)
          } catch (error) {
            setError(error.message);
            setLoading(false);
          }
        }

        getAllModules()
    },[authState.user.accessToken, authState.user.id])
  return (
    <div className="p-6">
      <h1 className="w-full text-center text-2xl font-bold mb-4">Enrolled Modules</h1>
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {!loading && !error && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((module, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg p-4">
              <h2 className="text-xl font-semibold mb-2">{module.title}</h2>
              <p className="text-gray-700 mb-4">{module.description}</p>
              <Link
                to={`/module/${module._id}`}
                className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Start Module
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
