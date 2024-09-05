import React, { useState, useEffect, useContext } from "react";
import axios from "../configs/axios";
import { useParams, useNavigate, Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";

export function TestComponent() {
  const { testIndex } = useParams();
  const navigate = useNavigate();
  const { authState } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [test, setTest] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [feedback, setFeedback] = useState("");
  const [feedbackStyle, setFeedbackStyle] = useState("");
  const [scores, setScores] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const getTest = async () => {
      try {
        setLoading(true);
        const response = await axios.get("/exercises");
        setTest(response.data[testIndex]);
      } catch (err) {
        setError("Failed to load test.");
      } finally {
        setLoading(false);
      }
    };

    getTest();
  }, [testIndex]);

  const handleAnswerSubmit = () => {
    const currentQuestion = test[currentQuestionIndex];
    const isCorrect = currentQuestion.answer.includes(userAnswer);

    if (isCorrect) {
      setFeedback(`Correct! ${currentQuestion.reason}`);
      setFeedbackStyle("text-green-600");
      setScores([...scores, 1]);
    } else {
      setFeedback(
        `Wrong answer, the correct answer is '${currentQuestion.answer}'. ${currentQuestion.reason}`
      );
      setFeedbackStyle("text-red-600");
      setScores([...scores, 0]);
    }

    setTimeout(() => {
      setUserAnswer("");
      setFeedback("");
      setFeedbackStyle("");
      if (currentQuestionIndex < test.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else {
        setSubmitted(true);
      }
    }, 3000);
  };

  const handleFinalSubmit = () => {
    const totalScore = scores.reduce((acc, score) => acc + score, 0);
    axios.post("/postResults",
        {
          testIndex: testIndex,
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

    navigate("/exercises");
  };

  const progress = Math.round(((currentQuestionIndex + 1) / test.length) * 100);

  if (loading) return <div className="text-center py-4">Loading...</div>;
  if (error) return <div className="text-red-500 py-4">{error}</div>;
  if (!test.length)
    return <div className="text-center py-4">No test data available</div>;

  const currentQuestion = test[currentQuestionIndex];

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <h1 className="text-2xl font-bold mb-6 text-center">
        Test {parseInt(testIndex) + 1}
      </h1>

      <div className="mb-4 text-center">
        <Link
          to="/exercises"
          className="text-gray-700 hover:text-gray-700 mb-3 py-2 px-4 bg-green-400 rounded shadow-lg"
        >
          Return to Exercises
        </Link>
      </div>

      <div className="w-full bg-gray-200 rounded-full h-4 mb-4">
        <div
          className="bg-blue-500 h-4 rounded-full"
          style={{ width: `${progress}%` }}
        ></div>
        <p className="w-full text-center text-sm">{progress}%&nbsp;done</p>
      </div>
      <div className="m-4 p-4 border rounded-lg bg-white shadow">
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
            Submit Test and Return to Test List
          </button>
        </div>
      )}
    </div>
  );
}