const modules = require('../models/ModuleModel');
const users = require('../models/UserModel');

// Controller function to fetch and return all available modules
const getAvailableModules = async (req, res) => {
    try {
        // Fetch the user and check if the user exists
        const user = await users.findById(req.query.userId);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        const userRole = user.role.toLowerCase();
        let availableModules;

        if (userRole === 'student') {
            // Fetch all modules for students
            availableModules = await modules.find();
        } else if (userRole === 'instructor') {
            // Fetch modules created by the instructor
            availableModules = await modules.find({ author: req.query.userId });
        }

        // If no modules found, return a message
        if (!availableModules || availableModules.length === 0) {
            return res.status(200).json({ message: "No available Modules" });
        }

        // Send the available modules in the response
        res.status(200).json({ availableModules });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { getAvailableModules };
