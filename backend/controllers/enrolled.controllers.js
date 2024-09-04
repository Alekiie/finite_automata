const Module =require('../models/ModuleModel')
const authenticateUser = require("../utils/auth.util");

const enrolled = async (req, res) => {
  try {
    const { user, status, json } = await authenticateUser(req, res);
    // Find all enrollments associated with the user by looping through all the modules that have the user's ID in their enrolledUsers array
    const allEnrollments = await Module.find({ enrolledUsers: user._id });

    // Return all enrolled modules
    return res.status(200).json(allEnrollments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
module.exports = { enrolled };
