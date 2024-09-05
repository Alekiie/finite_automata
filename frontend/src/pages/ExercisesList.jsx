import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import axios from "../configs/axios";

export function ExercisesList() {
  const { authState } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [exercises, setExercises] = useState([]);
  const [completedTests, setCompletedTests] = useState([]);

  useEffect(() => {
    const getExercises = async () => {
      try {
        setLoading(true);
        const response = await axios.get("/exercises");
        setExercises(response.data);
      } catch (err) {
        setError("Failed to load exercises.");
      } finally {
        setLoading(false);
      }
    };

    const getCompletedTests = async () => {
      try {
        const response = await axios.get("/results", {
          headers: { Authorization: `Bearer ${authState.user.accessToken}` },
        });
        setCompletedTests(response.data);
      } catch (err) {
        console.error("Failed to load completed tests");
      }
    };

    getExercises();
    getCompletedTests();
  }, [authState.user.accessToken]);

  const handleCompletedClick = () => {
    alert("You have already completed this test.");
  };

  if (loading) return <div className="text-center py-4">Loading...</div>;
  if (error) return <div className="text-red-500 py-4">{error}</div>;
  if (!exercises.length)
    return <div className="text-center py-4">No exercises available</div>;

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
        Available Tests
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {exercises.map((test, index) => {
          const isCompleted = completedTests.includes(index);

          return (
            <div
              key={index}
              className={`block bg-white shadow-lg rounded-lg p-6 ${
                isCompleted
                  ? "bg-gray-100 cursor-not-allowed"
                  : "hover:bg-blue-50 transform hover:scale-105 transition-all duration-300"
              }`}
            >
              <div className="flex items-center justify-between">
                <span
                  className={`text-xl font-semibold ${
                    isCompleted ? "text-gray-500" : "text-gray-800"
                  }`}
                >
                  Test {index + 1}
                </span>
                {isCompleted && (
                  <span className="text-sm text-green-600 font-semibold">
                    Completed
                  </span>
                )}
              </div>
              <p
                className={`mt-2 ${
                  isCompleted ? "text-gray-400" : "text-gray-600"
                }`}
              >
                {isCompleted
                  ? "You have already completed this test."
                  : "Click to take this test"}
              </p>
              {!isCompleted ? (
                <Link
                  to={`/test/${index}`}
                  className="block mt-4 text-blue-500 hover:text-blue-700 underline"
                >
                  Start Test
                </Link>
              ) : (
                <button
                  onClick={handleCompletedClick}
                  className="block mt-4 text-gray-400 cursor-not-allowed"
                >
                  Completed
                </button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
