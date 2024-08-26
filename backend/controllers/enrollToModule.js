const Enrollment = require('../models/EnrolledModules'); 
const Users = require('../models/UserModel');
const jwt = require("jsonwebtoken");


const enrollToModule = async (req, res) => {
  try {
    const authHeader = req.headers.authorization;
    // Check if the Authorization header is present
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({ message: "Unauthorized: No token provided" });
    }

    const token = authHeader.split(" ")[1];

    // Decode and verify the token
    const decoded = jwt.verify(token, process.env.SECRET_KEY);

    // Find the user associated with the decoded token
    const user = await Users.findById(decoded.id);
    const { moduleId } = req.body;

    const existingEnrollment = await Enrollment.findOne({ userId: user._id, moduleId });
    if (existingEnrollment) {
      return res.status(400).json({ message: 'You are already enrolled in this module.' });
    }

    const enrollment = new Enrollment({
      userId:user._id,
      moduleId
    });

    await enrollment.save();

    
    return res.status(201).json({ message: 'Module enrolled successfully', enrollment });
  } catch (error) {
   
    console.error(error);
    return res.status(500).json({ message: 'Internal server error', error: error.message });
  }
};

module.exports = { enrollToModule };
