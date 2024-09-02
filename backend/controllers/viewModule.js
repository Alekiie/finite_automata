const moduleModel = require("../models/ModuleModel");

const viewModule = async (req, res) => {
  const moduleId = req.params.id;
  try {
    const fetchedModule = await moduleModel.findById(moduleId);
    return res.status(200).json(fetchedModule);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = { viewModule };
