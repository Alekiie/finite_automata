import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import AuthContext from '../context/AuthContext';

export function Instructors() {
  const { authState } = useContext(AuthContext);
  const [instructors, setInstructors] = useState([]);

  useEffect(() => {
    const getInstructors = async () => {
      try {
        // Make the request and await the response
        const response = await axios.get("http://localhost:3000/instructors");
        console.log("Instructors response:", response.data);
        
        // Access the instructors array from the response
        const result = response.data.instructors;
        setInstructors(result);
      } catch (error) {
        console.error("Error fetching instructors:", error);
      }
    };

    getInstructors();
  }, [authState.user]);

  return (
    <div>
      {/* Instructors Section */}
      <section id="instructors" className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-700 mb-6">Instructors</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {instructors?.map((instructor, index) => (
            <div className="bg-white p-6 shadow-md rounded-lg" key={index}>
              <h3 className="text-lg font-medium text-gray-600">
                {`Dr. ${instructor.firstName} ${instructor.lastName}`}
              </h3>
              <p className="text-gray-700">{instructor.email}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
