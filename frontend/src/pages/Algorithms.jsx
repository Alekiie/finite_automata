import React, { useState, useEffect } from "react";
import axios from "../configs/axios";

// import reload icons
import { RxReload } from "react-icons/rx";

export const Algorithms = () => {
  const [grammar, setGrammar] = useState({});
  const [userWords, setUserWords] = useState([""]);
  const [result, setResult] = useState(null);
  const [solution, setSolution] = useState(null);
  const [showHint, setShowHint] = useState(false);

  // Fetch grammar on component load
  useEffect(() => {
    axios.get("/generate")
      .then((response) => {
        setGrammar(response.data);
      })
      .catch((error) => console.error("Error fetching grammar:", error));
  }, []);

  // Handle word input change
  const handleWordChange = (index, value) => {
    const newWords = [...userWords];
    newWords[index] = value;
    setUserWords(newWords);
  };

  // Add a new word input field
  const addWordInput = () => {
    setUserWords([...userWords, ""]);
  };

  // Send user words and grammar to the /check route
  const checkAnswers = () => {
    const data = {
      grammar,
      userWords,
    };

    axios
      .post("/check", data)
      .then((response) => {
        setResult(response.data.results);
      })
      .catch((error) => console.error("Error checking answers:", error));
  };

  // Send grammar to the /generateWords route to fetch possible solutions
  const showSolutions = () => {
    const maxLength = 10; // Define a maximum length for generated words
    const data = {
      grammar,
      startSymbol: "S", // Assuming "S" is your starting symbol
      maxLength,
    };

    axios
      .post("/generateWords", data)
      .then((response) => {
        setSolution(response.data);
        setShowHint(true);
        setTimeout(() => {
          setShowHint(false);
        }, 3000); // Hide solutions after 3 seconds
      })
      .catch((error) => console.error("Error fetching solutions:", error));
  };

  return (
    <div className="container w-1/3 mx-auto p-4">
      <h1 className="text-xl text-center font-bold mb-4">Algorithms</h1>

      <p className="mb-4">
        Write the words that can be generated from the below grammar:
      </p>

      <div className="grammar mb-4">
        {Object.keys(grammar).map((key) => (
          <div key={key} className="mb-2">
            <h2 className="font-semibold">
              {key} → {grammar[key].join(" | ")}
            </h2>
          </div>
        ))}
      </div>

      <button onClick={()=>{window.location.reload()}} className="flex items-center gap-2 bg-emerald-500 text-white p-2 ml-2 mb-3 rounded shadow-lg">
        <RxReload />
        <span>reload grammar</span>
      </button>

      <div className="mb-4">
        {userWords.map((word, index) => (
          <div key={index} className="mb-2">
            <input
              type="text"
              value={word}
              onChange={(e) => handleWordChange(index, e.target.value)}
              className="border p-2 rounded w-full"
              placeholder={`Enter word ${index + 1}`}
            />
          </div>
        ))}
        <button
          onClick={addWordInput}
          className="bg-gray-500 text-white p-2 rounded"
        >
          Add Another Word
        </button>
      </div>

      <button
        onClick={checkAnswers}
        className="bg-blue-500 text-white p-2 rounded mr-2"
      >
        Check Answers
      </button>
      <button
        onClick={showSolutions}
        className="bg-green-500 text-white p-2 rounded"
      >
        Show Possible Solutions
      </button>

      {result && (
        <div className="mt-4">
          <h2 className="text-lg font-bold">Check Result:</h2>
          <ul>
            {result.map(({ word, isAccepted }, index) => (
              <li
                key={index}
                className={`mb-2 p-2 ${
                  isAccepted ? "text-green-500" : "text-red-500"
                }`}
              >
                Word: <strong>{word}</strong> -{" "}
                {isAccepted ? "Accepted" : "Rejected"}
              </li>
            ))}
          </ul>
        </div>
      )}

      {showHint && solution && (
        <div className="mt-4 p-4 border border-gray-300 rounded bg-gray-100 shadow-lg">
          <h2 className="text-lg font-bold mb-2">Possible Solutions:</h2>
          <ul className="list-disc list-inside">
            {solution.map((word, index) => (
              <li key={index} className="mb-1 text-gray-700">
                {word}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
