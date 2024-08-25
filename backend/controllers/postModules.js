const ModuleModel = require('../models/ModuleModel');

const createModule = async (req, res) => {
    try {

        // Check if the user is logged in
        if (!req.user) {
            return res.status(401).json({ message: 'Unauthorized' });
        }

        // Check if the role of the user is instructor
        if (req.user.role.toLocaleLowerCase() !== 'instructor') {
            return res.status(403).json({ message: 'Only instructors can create modules' });
        }
        // Extract module data from the request body
        const { title, description, content, author, automataReferences, enrolledUsers } = req.body;

        // Create a new module instance
        const module = new ModuleModel({
            title,
            description,
            content,
            author:req.user._id,
            automataReferences,
            enrolledUsers,
        });
       
        // Save the module to the database
        await module.save();

        // Return a success response
        return res.status(201).json({ message: 'Module created successfully', module });
    } catch (error) {
        // Handle any errors that occur during the process
        console.error(error);
        return res.status(500).json({ message: 'Internal server error', error: error.message });
    }
};

module.exports = {
    createModule,
};
