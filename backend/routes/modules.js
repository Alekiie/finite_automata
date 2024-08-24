const express = require('express');
const router = express.Router();
const {createModule} = require('../controllers/postModules');
const authenticate = require('../middlewares/isAuthenticated');
const authorizeInstructor = require('../middlewares/isAuthorized');
const controller = require('../controllers/availablemodules')

// Route to create a module
router.post('/', authenticate, authorizeInstructor, createModule);

// Route to get all modules
router.get('/', controller.getAvailableModules)

module.exports = router;

