const users=require('../models/UserModel')

const getInstructors = async (req, res) => {
    try {
        const instructors = await users.find({ role: 'instructor' });

        if (!instructors || instructors.length === 0) {
            return res.status(200).json({ message: "No instructors found" });
        }

       
        res.status(200).json({ instructors });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
module.exports = { getInstructors };
