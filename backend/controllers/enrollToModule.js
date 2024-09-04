const Enrollment = require('../models/EnrolledModules');
const Users = require('../models/UserModel');
const jwt = require("jsonwebtoken");
const authenticateUser = require('../utils/auth.util');
const Module = require('../models/ModuleModel');


const enrollToModule = async (req, res) => {
  try {
    const { user, status, json } = await authenticateUser(req, res);

    const { moduleId } = req.body;

    const existingEnrollment = await Enrollment.findOne({ userId: user._id, moduleId });
    if (existingEnrollment) {
      return res.status(400).json({ message: 'You are already enrolled in this module.' });
    }

    const enrollment = new Enrollment({
      userId: user._id,
      moduleId
    });

    await enrollment.save();

    await Module.findByIdAndUpdate(moduleId,{$addToSet:{enrolledUsers:user._id}});
    return res.status(201).json({ message: 'Module enrolled successfully', enrollment });
  } catch (error) {

    console.error(error);
    return res.status(500).json({ message: 'Internal server error', error: error.message });
  }
};

module.exports = { enrollToModule };
