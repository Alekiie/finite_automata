import React from 'react'

export function Instructors() {
  return (
    <div>
      {" "}
      {/* Instructors Section */}
      <section id="instructors" className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-700 mb-6">
          Instructors
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 shadow-md rounded-lg">
            <h3 className="text-lg font-medium text-gray-600">Dr. John Doe</h3>
            <p className="text-gray-700">
              Expert in Finite Automata and Regular Languages.
            </p>
          </div>
          <div className="bg-white p-6 shadow-md rounded-lg">
            <h3 className="text-lg font-medium text-gray-600">
              Prof. Jane Smith
            </h3>
            <p className="text-gray-700">
              Specializes in Theoretical Computer Science.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
