import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function Stats({ stats, performanceScores, user }) {
    const navigate = useNavigate();
  return (
    <section id="stats" className="mb-10">
      <h2 className="text-2xl font-semibold text-gray-700 mb-6">{user.firstName}'s Stats</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 shadow-md rounded-lg">
          <h3 className="text-lg font-medium text-gray-600">
            {user.role.toLowerCase() === 'student'? "Total Modules Enrolled" : "Total Modules Uploaded"}
          </h3>
          <p className="text-3xl font-bold text-red-800 text-center">
            {stats.totalEnrolledModules}
          </p>
        </div>
        <div className="bg-white p-6 shadow-md rounded-lg">
          <h3 className="text-lg font-medium text-center text-gray-600">
            {user.role.toLowerCase() === 'student'? "Total Modules Completed" : ""}
          </h3>
          <p className="text-3xl font-bold text-center text-red-800">
            {stats.completedModules}
          </p>
        </div>
        <div className="bg-white p-6 shadow-md rounded-lg">
          <h3 className="text-lg font-medium text-gray-600">Active Modules</h3>
          <p className="text-3xl text-center font-bold text-red-800">
            {stats.activeModules}
          </p>
        </div>
        <div className="bg-white p-6 shadow-md text-center rounded-lg">
          <h3 className="text-lg font-medium text-gray-600">
            {user.role.toLowerCase() === 'student'? "Exercises Completed" : "Total Tests Uploaded"}
          </h3>
          <p className="text-3xl text-center font-bold text-red-800">
            {performanceScores.length > 1 ? `${performanceScores.length} tests`: `${performanceScores.length} test`}
          </p>
        </div>
      </div>
      {user.role.toLowerCase() === "student" && (
        <div className="flex flex-col w-full mt-3">
          <h2 className="text-2xl text-center font-semibold text-gray-700 mb-6">
            Your Actions
          </h2>
          <article className="flex items-center justify-around">
            <div className="flex items-center justify-center">
              <button
                onClick={() => {
                  navigate("/learning");
                }}
                className="bg-green-300 px-4 py-2 shadow-md text-center rounded-lg hover:bg-green-400 transition-all ease-in-out cursor-pointer"
              >
                Continue Learning
              </button>
            </div>
            <div className="flex items-center justify-center">
              <button
                onClick={() => {
                  navigate("/exercises");
                }}
                className="bg-green-300 px-4 py-2 shadow-md text-center rounded-lg hover:bg-green-400 transition-all ease-in-out cursor-pointer"
              >
                Exercises
              </button>
            </div>
            <div className="flex items-center justify-center">
              <button
                onClick={() => {
                  navigate("/algorithms");
                }}
                className="bg-green-300 px-4 py-2 shadow-md text-center rounded-lg hover:bg-green-400 transition-all ease-in-out cursor-pointer"
              >
                Algorithms
              </button>
            </div>
            <div className="flex items-center justify-center">
              <button
                onClick={() => {
                  navigate("/playground");
                }}
                className="bg-green-300 px-4 py-2 shadow-md text-center rounded-lg hover:bg-green-400 transition-all ease-in-out cursor-pointer"
              >
                Playground
              </button>
            </div>
          </article>
        </div>
      )}
    </section>
  );
}
