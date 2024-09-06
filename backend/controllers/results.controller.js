const Results = require("../models/resultsModel");
const authenticateUser = require("../utils/auth.util");

const grabAndSaveResults = async (req, res) => {
  try {
    const { user, status, json } = await authenticateUser(req, res);
    const { testIndex, score } = req.body;

    // Calculate score as a percentage (assuming max score is 10)
    const percentageScore = (score / 10) * 100;

    // Find existing result by studentId and testIndex
    let userResults = await Results.findOne({ studentId: user._id, testIndex });

    if (userResults) {
      // Update the testScore (now in percentage)
      userResults.testScore = score;
      await userResults.save();
    } else {
      // Create new result with percentage score
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
    res
      .status(500)
      .json({ message: "Oops, an error occurred: " + error.message });
  }
};

module.exports = { grabAndSaveResults };
