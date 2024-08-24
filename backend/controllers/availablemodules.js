const modules = require('../models/ModuleModel')


// Controller function to fetch and return all available modules
const getAvailableModules = async (req, res) => {
    try {
        const availableModules = await modules.find();
        if (!availableModules) {
            res.status(200).json({ message: "No available Modules" })
        }
        res.status(200).json({ availableModules });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
module.exports = { getAvailableModules }