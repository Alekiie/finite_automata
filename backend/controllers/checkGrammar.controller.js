const { checkWord } = require("../utils/wordChecker");
const { generateRandomRLG } = require("../utils/automata");

const checkWordsController = (req, res) => {
  try {
    const { words } = req.body; // Get the array of words from the request body
    if (!Array.isArray(words)) {
      return res
        .status(400)
        .json({ message: "Invalid input: 'words' must be an array." });
    }

    const grammar = generateRandomRLG(); // Generate the grammar
    const results = words.map((word) => {
      const isAccepted = checkWord(word, "S", grammar);
      return {
        word,
        isAccepted,
        grammar,
      };
    });

    // Return the results as a JSON response
    res.json({ results, grammar });
  } catch (error) {
    // Handle any errors that might occur
    res.status(500).json({
      message: "Error processing words",
      error: error.message,
    });
  }
};

module.exports = { checkWordsController };
