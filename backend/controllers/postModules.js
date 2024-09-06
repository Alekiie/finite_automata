const ModuleModel = require('../models/ModuleModel');
const authenticateUser = require('../utils/auth.util');
const multer = require('multer');

// Set up multer storage
const storage = multer.memoryStorage(); // Memory storage for file buffer
const upload = multer({ storage: storage }).single('contentFile'); // 'contentFile' is the key for the file in the form-data

const createModule = async (req, res) => {
    try {
        const { user, status, json } = await authenticateUser(req, res);

        // Check if the role of the user is instructor
        if (req.user.role.toLocaleLowerCase() !== 'instructor') {
            return res.status(403).json({ message: 'Only instructors can create modules' });
        }

        // Handle file upload
        upload(req, res, async (err) => {
            if (err) {
                return res.status(400).json({ message: 'File upload failed', error: err.message });
            }

            const { title, description, contentType, contentTitle, contentText, automataReferences, enrolledUsers } = req.body;

            // Initialize content object based on the content type
            let content = {
                type: contentType, // 'text', 'video', 'quiz', 'pdf', 'exercise'
                title: contentTitle,
                data: null // Initialize data
            };

            // Handle content based on contentType
            switch (contentType) {
                case 'text':
                    // For text content, use `contentText` from the body
                    content.data = contentText;
                    break;
                case 'video':
                    // For videos, expect a video URL or buffer file (e.g., video upload)
                    content.data = req.file ? req.file.buffer : null; // Buffer if file exists
                    break;
                case 'pdf':
                    // For PDFs, expect a file upload
                    content.data = req.file ? req.file.buffer : null; // Buffer if file exists
                    break;
                case 'quiz':
                    // For quizzes, expect the quiz questions as JSON
                    content.data = JSON.parse(req.body.quizData); // Quiz data sent as a JSON string
                    break;
                case 'exercise':
                    // For exercises, expect exercise details
                    content.data = JSON.parse(req.body.exerciseData); // Exercise data sent as a JSON string
                    break;
                default:
                    return res.status(400).json({ message: 'Invalid content type' });
            }

            // Create a new module instance
            const module = new ModuleModel({
                title,
                description,
                content,
                author: req.user._id,
                automataReferences,
                enrolledUsers,
            });

            // Save the module to the database
            await module.save();

            // Return a success response
            return res.status(201).json({ message: 'Module created successfully', module });
        });

    } catch (error) {
        // Handle any errors that occur during the process
        console.error(error);
        return res.status(500).json({ message: 'Internal server error', error: error.message });
    }
};

module.exports = {
    createModule,
};
