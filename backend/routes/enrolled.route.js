const allEnrollments =require('../controllers/enrolled.controllers')
const express = require('express');
const router = express.Router();

router.get('/', allEnrollments.enrolled);
module.exports = router;