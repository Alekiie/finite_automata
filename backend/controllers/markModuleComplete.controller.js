const enrolledmodules = require("../models/EnrolledModules");
const authenticateUser = require("../utils/auth.util");

const markModuleCompleteController = async (req, res) => {
  try {
    const { user, status, json } = await authenticateUser(req, res);
    const { moduleId } = req.body;

    // Find the enrollment record for the user and module
    const enrollment = await enrolledmodules.findOne({
      userId: user._id,
      moduleId,
    });

    if (!enrollment) {
      return res.status(404).json({ message: "Module not found" });
    }

    // Mark the module as complete
    enrollment.status = "completed";
    enrollment.completionDate = new Date(); // Set the completion date to the current date
    enrollment.progress = 100; // Set progress to 100%

    // Save the updated enrollment record
    await enrollment.save();

    res.json({ message: "Module marked as complete", enrollment });
  } catch (error) {
    res.status(500).json({
      message: "Error marking module as complete",
      error: error.message,
    });
  }
};

module.exports = { markModuleCompleteController };
