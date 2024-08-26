const express = require('express');
const router = express.Router();
const { enrollToModule } = require('../controllers/enrollToModule');

// Route to enroll in a module
router.post('/', enrollToModule);

module.exports = router;