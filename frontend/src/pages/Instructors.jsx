import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import AuthContext from '../context/AuthContext';

export function Instructors() {
  const {authState} = useContext(AuthContext)
  const [instructors, setInstructors] = useState([]);
  useEffect(()=>{
    const getInstructors = () => {
      const result = axios.get("http://localhost:3000/instructors").data;
      setInstructors(result);
    }

    getInstructors()
  },[authState.user])
  return (
    <div>
      {/* Instructors Section */}
      <section id="instructors" className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-700 mb-6">
          Instructors
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {instructors.map((instructor, index) => (
            <div className="bg-white p-6 shadow-md rounded-lg" key={index}>
              <h3 className="text-lg font-medium text-gray-600">
                {`Dr. ${instructor.firstName} ${instructor.lastName}`}
              </h3>
              <p className="text-gray-700">
                {instructor.email}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
