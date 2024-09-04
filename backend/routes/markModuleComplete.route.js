const express = require('express');
const router = express.Router();
const {markModuleCompleteController}=require('../controllers/markModuleComplete.controller')

router.post("/", markModuleCompleteController);
module.exports = router;