const Enrollment = require('../models/EnrolledModules'); // Updated the model import to 'Enrollment'

const enrollToModule = async (req, res) => {
  try {
    if (!req.user) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    const { moduleId } = req.body;

    const existingEnrollment = await Enrollment.findOne({ userId: req.user._id, moduleId });
    if (existingEnrollment) {
      return res.status(400).json({ message: 'You are already enrolled in this module.' });
    }

    const enrollment = new Enrollment({
      userId: req.user._id,
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
