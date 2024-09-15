import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import axios from "../configs/axios";

export function ExercisesList() {
  const { authState } = useContext(AuthContext);
  const navigate = useNavigate();
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
        const completedTestsData = response.data.map((result) => ({
          testIndex: result.testIndex,
          testScore: result.testScore,
        }));
        setCompletedTests(completedTestsData);
      } catch (err) {
        console.error("Failed to load completed tests");
      }
    };

    getExercises();
    getCompletedTests();
  }, [authState.user.accessToken]);

  const handleRetakeTest = (testIndex) => {
    navigate(`/test/${testIndex}`);
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
          const completedTest = completedTests.find(
            (completed) => completed.testIndex === index
          );
          const isCompleted = !!completedTest;
          const testScore = completedTest ? completedTest.testScore : null;

          return (
            <div
              key={index}
              className={`block bg-white shadow-lg rounded-lg p-6 ${ isCompleted ? "bg-gray-100 cursor-not-allowed" : "hover:bg-blue-50 transform hover:scale-105 transition-all duration-300"}`}
            >
              <div className="flex items-center justify-between">
                <span
                  className={`text-xl font-semibold ${isCompleted ? "text-gray-500" : "text-gray-800"}`}
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
                  ? `You have already completed. \nScored: ${testScore * 10}%`
                  : "Click to take this test"}
              </p>
              {!isCompleted ? (
                <Link to={`/test/${index}`}
                  className="block mt-4 text-blue-500 hover:text-blue-700 underline"
                >
                  Start Test
                </Link>
              ) : (
                <div className="flex mt-4 gap-4">
                  <button
                    onClick={() => handleRetakeTest(index)}
                    className="bg-lime-400 text-black px-2 py-1 rounded shadow-lg"
                  >
                    Retake Test
                  </button>
                  <button
                    onClick={() => handleCompletedClick()}
                    className="text-gray-400 cursor-not-allowed"
                  >
                    Completed
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
