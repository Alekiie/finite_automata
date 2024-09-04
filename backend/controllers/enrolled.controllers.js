const Enrollment = require("../models/EnrolledModules");
const Users = require("../models/UserModel");
const jwt = require("jsonwebtoken");
const authenticateUser = require("../utils/auth.util");

const enrolled = async (req, res) => {
  try {
    const { user, status, json } = await authenticateUser(req, res);
    const allEnrollments = await Enrollment.find({ userId: user._id }).populate('moduleId',"_id title description author automataReference enrolledUsers createdAt updatedAt");
    // Return all enrolled modules
    return res.status(200).json(allEnrollments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
module.exports = { enrolled };
