const Results = require("../models/resultsModel");
const authenticateUser = require("../utils/auth.util");

const grabAndSaveResults = async (req, res) => {
  try {
    const { user, status, json } = await authenticateUser(req, res);
    const { testIndex, score } = req.body;

    // Find existing result by studentId and testIndex
    let userResults = await Results.findOne({ studentId: user._id, testIndex });

    if (userResults) {
      // If result exists, update the testScore
      userResults.testScore = score;
      await userResults.save();
    } else {
      // If no result exists, create a new one
      userResults = new Results({
        studentId: user._id,
        testIndex,
        testScore: score,
      });
      await userResults.save();
    }

    return res.status(200).json({
      message: `Results for ${user.firstName} ${user.lastName} submitted successfully...`,
    });
  } catch (error) {
    res.status(500).json({ message: "Oops, an error occurred: " + error.message });
  }
};

module.exports = { grabAndSaveResults };
