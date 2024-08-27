
const modules = require('../models/EnrolledModules');
const Users = require('../models/UserModel');
const jwt = require("jsonwebtoken");
const authenticateUser = require('../utils/auth.util');
const Enrollment = require('../models/EnrolledModules');
const Module = require('../models/ModuleModel');


const getDashboardStats = async (req, res) => {
    const { user, status, json } = await authenticateUser(req, res);
    let stats;
    
    if (user.role.toLowerCase() === 'student') {
        const totalEnrolledModules = await modules.find().countDocuments();
        const completedModules = await modules.find({ status: 'completed' }).countDocuments();
        const activeModules = await modules.find({ status: 'active' }).countDocuments();

        // Calculate the total time spent by the user across all modules
        const enrollments = await modules.find({ userId: user._id });

        let totalTimeSpent = 0;
        enrollments.forEach(enrollment => {
            // Sum up the durations from all study sessions
            const timeSpentInModule = enrollment.studySessions.reduce((total, session) => total + session.duration, 0);
            totalTimeSpent += timeSpentInModule;
        });

        stats = { totalEnrolledModules, activeModules, completedModules, totalTimeSpent: totalTimeSpent.toFixed(2) };

    } else if (user.role.toLowerCase() === 'instructor') {
        // Get all modules authored by the instructor
        const instructorModules = await Module.find({ author: user._id }).select('_id');

        // Get the unique userIds of students enrolled in the instructor's modules
        const totalEnrolledStudents = await Enrollment.distinct('userId', {
            moduleId: { $in: instructorModules.map(module => module._id) }
        }).countDocuments();

        const totalModules = instructorModules.length;
        
        stats = { totalEnrolledStudents, totalModules };
    }
    
    console.log("Stats response:", stats);
    return res.status(200).json(stats);
};
module.exports = { getDashboardStats };
