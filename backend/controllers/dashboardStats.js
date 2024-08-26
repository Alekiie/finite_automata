const modules = require('../models/EnrolledModules')
const Users = require('../models/UserModel')
const jwt = require("jsonwebtoken");
const authenticateUser = require('../utils/auth.util');

const getDashboardStats = async (req, res) => {
    const { user, status, json } = await authenticateUser(req, res);

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
    const stats = { totalEnrolledModules, activeModules, completedModules, totalTimeSpent: totalTimeSpent.toFixed(2) }
    return res.status(200).json(stats);
}
module.exports = { getDashboardStats };