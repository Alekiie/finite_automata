import React from 'react'
import { MemoizedBarChart, MemoizedLineChart } from '../pages/Dashboard';

export default function Performance({progressData, performanceData, instructors, modules, }) {
  return (
    <>
      {/* Performance Section */}
      <section id="performance" className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-700 mb-6">
          Performance
        </h2>
        <div className="bg-white p-6 shadow-md rounded-lg">
          <MemoizedBarChart data={performanceData} />
        </div>
      </section>
      {/* Instructors Section */}
      <section id="instructors" className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-700 mb-6">
          Instructors
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {instructors.map((instructor, index) => (
            <div className="bg-white p-6 shadow-md rounded-lg" key={index}>
              <h3 className="text-lg font-medium text-gray-600">
                Dr. {instructor.firstName}&nbsp;{instructor.lastName}
              </h3>
              <p className="text-gray-700">{instructor.email}</p>
            </div>
          ))}
        </div>
      </section>
      {/* Modules Section */}
      <section id="modules" className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-700 mb-6">
          Enrolled Modules
        </h2>
        <div className="bg-white p-6 shadow-md rounded-lg mb-6">
          <h3 className="text-lg font-medium text-gray-600 mb-4">Progress</h3>
          <MemoizedLineChart data={progressData} />
        </div>
        <div className="w-full flex flex-col md:grid-cols-2 gap-6">
          {modules.map((module, index) => (
            <div className="bg-white p-6 shadow-md rounded-lg" key={index}>
              <h3 className="text-lg font-medium text-gray-600">
                Module {index + 1}: {module.content.title}
              </h3>
              <p className="text-gray-700">Type: {module.content.type}</p>
              <p className="text-gray-700">
                Content: {module.description.split("").slice(0, 30)}...
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
