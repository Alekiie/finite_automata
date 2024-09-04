// controllers/questionsController.js
const {questionsData} = require("../data/questions");

// Controller to get questions in groups of 10
const getGroupedQuestions = (req, res) => {
  try {
    const groupSize = 10; // Number of questions per group
    const groupedQuestions = [];

    // Loop through questions and group them in sets of 10
    for (let i = 0; i < questionsData.length; i += groupSize) {
      groupedQuestions.push(questionsData.slice(i, i + groupSize));
    }

    // Return grouped questions as a JSON response
    res.json(groupedQuestions);
  } catch (error) {
    // Handle any errors that might occur
    res
      .status(500)
      .json({
        message: "Error retrieving grouped questions",
        error: error.message,
      });
  }
};

module.exports = { getGroupedQuestions };
