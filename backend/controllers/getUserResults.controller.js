const results = require("../models/resultsModel");
const authenticateUser = require("../utils/auth.util");

const getResults = async (req, res) => {
  try {
    const { user, status, json } = await authenticateUser(req, res);

    const userResults = await results.find({ studentId: user._id });

    if (userResults.length === 0) {
      return res.status(404).json({ message: "No results found" });
    }

    // Assuming the max score for each test is 10
    const maxScore = 10;

    // Convert testScore to percentage
    const resultsAsPercentage = userResults.map((result) => ({
      ...result._doc, // Spread result document
      testScorePercentage: (result.testScore / maxScore) * 100,
    }));

    res.status(200).json(resultsAsPercentage);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Oops, an error occurred: " + error.message });
  }
};

module.exports = { getResults };
