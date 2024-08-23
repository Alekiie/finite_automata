const modules =require('../models/ModuleModel')
// Create a controller to fetch and return all available modules
const getAvailableModules = async (req, res) => {
    try {
        const availableModules = await modules.find();
        res.status(200).json({ availableModules });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}