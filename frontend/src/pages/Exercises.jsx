import React, { useState, useEffect, useContext } from "react";
import AuthContext from "../context/AuthContext";
import axios from "../configs/axios";

export function Exercises() {
  const { authState } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [exercises, setExercises] = useState([]);
  const [currentTestIndex, setCurrentTestIndex] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [feedback, setFeedback] = useState("");
  const [feedbackStyle, setFeedbackStyle] = useState("");
  const [scores, setScores] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const getExercises = async () => {
      try {
        setLoading(true);
        const response = await axios.get("/exercises");
        setExercises(response.data);
        console.log(response.data);
      } catch (err) {
        setError("Failed to load exercises.");
      } finally {
        setLoading(false);
      }
    };

    getExercises();
  }, [authState.user.accessToken]);

  const handleAnswerSubmit = () => {
    const currentTest = exercises[currentTestIndex];
    const currentQuestion = currentTest[currentQuestionIndex];
    const isCorrect = currentQuestion.answer.includes(userAnswer);

    if (isCorrect) {
      setFeedback(`Correct! ${currentQuestion.reason}`);
      setFeedbackStyle("text-green-600"); // Set feedback style to green for correct answers
      setScores([...scores, 1]);
    } else {
      setFeedback(
        `Wrong answer, the correct answer is '${currentQuestion.answer}'. ${currentQuestion.reason}`
      );
      setFeedbackStyle("text-red-600"); // Set feedback style to red for wrong answers
      setScores([...scores, 0]);
    }

    // Reset answer and move to next question after a short delay
    setTimeout(() => {
      setUserAnswer("");
      setFeedback("");
      setFeedbackStyle("");
      if (currentQuestionIndex < currentTest.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else {
        setSubmitted(true);
      }
    }, 3000);
  };

  const handleFinalSubmit = () => {
    // Send final score to the backend
    const totalScore = scores.reduce((acc, score) => acc + score, 0);
    axios
      .post(
        "/postResults",
        {
          testIndex: currentTestIndex,
          score: totalScore,
        },
        {
          headers: {
            Authorization: `Bearer ${authState.user.accessToken}`,
          },
        }
      )
      .catch((err) => {
        setError("Failed to submit results.");
      });

    // Move to next test after submission
    if (currentTestIndex < exercises.length - 1) {
      setCurrentTestIndex(currentTestIndex + 1); // Move to the next test
      setCurrentQuestionIndex(0); // Reset question index for the next test
      setScores([]); // Reset scores for the next test
      setSubmitted(false); // Reset submitted state for the next test
    } else {
      alert("You have completed all the tests!"); // End of all tests
    }
  };

  if (loading) return <div className="text-center py-4">Loading...</div>;
  if (error) return <div className="text-red-500 py-4">{error}</div>;
  if (!exercises.length)
    return <div className="text-center py-4">No exercises available</div>;

  const currentTest = exercises[currentTestIndex];
  const currentQuestion = currentTest[currentQuestionIndex];

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <h1 className="text-2xl font-bold mb-6 text-center">
        Test {currentTestIndex + 1}
      </h1>
      <div className="mb-4 p-4 border rounded-lg bg-white shadow">
        <p className="text-lg font-semibold mb-2">{currentQuestion.question}</p>
        {currentQuestion.options.map((option, i) => (
          <label key={i} className="block mb-2">
            <input
              type="radio"
              name={`question-${currentQuestionIndex}`}
              value={option}
              checked={userAnswer === option}
              onChange={() => setUserAnswer(option)}
              className="mr-2"
            />
            {option}
          </label>
        ))}
        <button
          onClick={handleAnswerSubmit}
          disabled={!userAnswer}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4"
        >
          Submit Answer
        </button>
      </div>
      {feedback && (
        <div
          className={`text-center mt-4 p-4 bg-gray-100 border rounded ${feedbackStyle}`}
        >
          {feedback}
        </div>
      )}
      {submitted && (
        <div className="text-center mt-6">
          <h2 className="text-xl font-bold text-green-600">Test Completed!</h2>
          <button
            onClick={handleFinalSubmit}
            className="mt-4 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
          >
            Submit Test and Move to Next
          </button>
        </div>
      )}
    </div>
  );
}